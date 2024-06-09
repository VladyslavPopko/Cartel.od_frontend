import cn from 'classnames'
import { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CATALOG } from '../../../datas/data'
import './style.scss'

const MenuBox = ({ isMenu, setIsMenu }) => {
	const menu = CATALOG
	const [isDivision, setIsDivision] = useState(false)
	const [isCategory, setIsCategory] = useState(false)
	const [isSubCategory, setIsSubCategory] = useState(false)

	// const handleToCategory = () => {
	//   setIsCategory("category");
	// };
	// const handleToSubCategory = () => {
	//   setIsSubCategory(false);
	// };
	return (
		<div className='wrapper'>
			<nav className={cn('section', isMenu && 'appear')}>
				<div>
					{/* <div
          onClick={handleToCategory}
          className={cn(
            "back_category",
            isCategory !== "category" && isSubCategory === false && "appear"
          )}
        >
          Назад
        </div>
        <div
          onClick={handleToSubCategory}
          className={cn("back_category", isSubCategory && "appear")}
        >
          Назад
        </div> */}
					{menu.map((category, i) => (
						<div key={i}>
							<div
								className={cn(
									'division',
									isDivision === category.title && 'active'
								)}
								onClick={() => setIsDivision(category.title)}
							>
								{category.title}
							</div>
							{category.division?.map(subcategory =>
								subcategory.map(element => (
									<div key={element.title}>
										<div
											// isCategory === "category" &&
											className={cn(
												'category',
												isDivision === category.title && 'appear',
												isCategory === element.title && 'active'
											)}
											onClick={() => {
												setIsCategory(element.title)
												setIsSubCategory(false)
											}}
										>
											{element.title}
										</div>
										<div>
											{element.category.map(el => (
												<div key={el.title}>
													<div
														className={cn(
															'submenu',
															isCategory === element.title &&
																isDivision === category.title &&
																// isSubCategory === false &&
																'appear'
														)}
														key={el.title}
													>
														{el.element ? (
															<NavLink className='products' to={el.path}>
																{el.title}
															</NavLink>
														) : (
															<div
																className={cn(
																	'subcategory',
																	isSubCategory === el.title && 'active'
																)}
																onClick={() => setIsSubCategory(el.title)}
															>
																{el.title}
															</div>
														)}
													</div>
													{el.products ? (
														el.products.map(e => (
															<div
																className={cn(
																	'submenu',
																	isSubCategory === el.title &&
																		isCategory === element.title &&
																		isDivision === category.title &&
																		'appear'
																)}
																key={e.title}
																onClick={() => setIsMenu(false)}
															>
																<NavLink to={e.path} className='products'>
																	{e.title}
																</NavLink>
															</div>
														))
													) : (
														<p> s</p>
													)}
												</div>
											))}
										</div>
									</div>
								))
							)}
						</div>
					))}
				</div>
			</nav>
		</div>
	)
}

export default memo(MenuBox)
