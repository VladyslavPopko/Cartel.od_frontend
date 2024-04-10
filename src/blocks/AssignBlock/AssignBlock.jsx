import { memo } from "react";
import styles from "./style.module.scss";
import ModalWrapper from "../../wrappers/ModalWrapper/ModalWrapper";

const AssignBlock = ({ isVisibleAssign, setIsVisibleAssign, content }) => {
  const { link, title } = content;
  const handleClose = () => {
    setIsVisibleAssign(false);
  };
  return (
    <ModalWrapper isVisible={isVisibleAssign} handleClose={handleClose}>
      <article className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>
          <p> Загальні положення</p>
          <p>
            1.1.Договір оферти, є офіційною пропозицією {link}, далі за текстом
            - «Продавець», укласти Договір купівлі-продажу товарів дистанційним
            способом, а саме через Інтернет-магазин, далі по тексту - «Договір»,
            і розміщує Публічну оферту (пропозицію) на офіційному інтернет-сайті
            Продавця {link} (далі - «Інтернет-сайт»).
          </p>
          <p>
            1.2.Моментом повного і безумовного прийняття Покупцем пропозиції від
            Продавця (акцептом) укласти електронний договір купівлі-продажу
            товарів, вважається факт оплати Покупцем замовлення, на умовах цього
            Договору, у строки та за цінами, вказаними на Інтернет-сайті
            Продавця.
          </p>
          <p>Поняття і визначення</p>
          <p>
            2.1.Згідно цієї оферти, якщо контекст не вимагає іншого, наведені
            нижче терміни мають таке значення:
          </p>
          <p>
            «Товар» — моделі, аксесуари, комплектуючі та супровідні предмети;
          </p>
          <p></p>
          <p>
            {" "}
            «Інтернет-магазин» — відповідно до Закону України «Про електронну
            комерцію», засіб для презентації або реалізації товару, роботи або
            послуги шляхом здійснення електронної угоди.
          </p>
          <p>
            {" "}
            «Продавець» — компанія, яка реалізує товари, представлені на
            Інтернет-сайті.
          </p>
          <p>
            {" "}
            «Покупець» — фізична особа, що уклала з Продавцем Договір на умовах,
            викладених нижче.
          </p>
          <p>
            {" "}
            «Замовлення» — вибір окремих позицій з переліку товарів, визначених
            Покупцем при розміщенні замовлення і здійсненні оплати.
          </p>
          <p>Предмет договору</p>
          <p></p>
          <p>
            {" "}
            3.1.Продавець зобов'язується передати у власність Покупця Товар, а
            Покупець зобов'язується оплатити і прийняти Товар на умовах даного
            Договору.
          </p>
          <p></p>
          <p>
            {" "}
            Цей Договір регулює купівлю-продаж товарів в Інтернет-магазині, в
            тому числі:
          </p>
          <p> добровільний вибір Покупцем товарів в Інтернет-магазині;</p>
          <p>
            {" "}
            самостійне оформлення Покупцем замовлення в Інтернет-магазині;
            оплата Покупцем замовлення, оформленого в Інтернет-магазині;
          </p>
          <p>
            {" "}
            обробка та доставка замовлення Покупцеві у власність на умовах цього
            Договору.
          </p>
          <p>Порядок оформлення замовлення</p>
          <p>
            {" "}
            4.1.Покупець має право оформити замовлення на будь-який товар,
            представлений на сайті Інтернет-магазину і який є в наявності.
          </p>
          <p>
            4.2.Кожна позиція може бути представлена в замовленні в будь-якій
            кількості
          </p>
          <p>
            4.3.При відсутності товару на складі, Менеджер компанії зобов'язаний
            поставити Покупця до відома (телефоном або через електронну пошту).
          </p>
          <p>
            4.4.При відсутності товару Покупець має право замінити його товаром
            аналогічної моделі, відмовитися від даного товару, анулювати
            замовлення.
          </p>
          <p>Порядок оплати замовлення</p>
          <p>Оплата при отриманні</p>
          <p>
            5.1.Оплата здійснюється за фактом отримання товару у відділеннях
            транспортних компаній за готівковий розрахунок в національній
            валюті.
          </p>
          <p>
            5.2.При ненадходженні грошових коштів, Інтернет-магазин залишає за
            собою право анулювати замовлення.
          </p>
          <p>
            5.3.Перед відправкою замовлення з післяплатою, Покупець зобов'язаний
            сплатити 100 грн передплати. Вартість замовлення буде зменшено на
            суму передплати. Передплата повертається виключно в разі відмови
            Покупцем від Товару неналежної якості.
          </p>
          <p>Умови доставки замовлення</p>
          <p></p>
          <p>
            {" "}
            6.1.Доставка товарів, придбаних в Інтернет-магазині, здійснюється до
            відділень Нової Пошти, де і відбувається видача замовлень.
          </p>
          <p>
            6.2.Разом із замовленням Покупцеві видаються документи згідно із
            законодавством України.
          </p>
          <p>Права та обов'язки сторін:</p>
          <p>7.1. Продавець має право:</p>
          <p>
            в односторонньому порядку припинити надання послуг за цим договором
            у разі порушення Покупцем умов цього Договору.
          </p>
          <p> 7.2. Покупець зобов'язаний:</p>
          <p>
            {" "}
            своєчасно оплатити та отримати замовлення на умовах цього Договору.
          </p>
          <p> 7.3. Покупець має право:</p>
          <p>оформити замовлення в Інтернет-магазині;</p>
          <p> оформити електронний договір;</p>
          <p> вимагати від Продавця виконання умов цього Договору.</p>
          <p>Відповідальність сторін</p>
          <p>
            8.1.Сторони несуть відповідальність за невиконання або неналежне
            виконання умов цього Договору в порядку, передбаченому цим Договором
            та чинним законодавством України
          </p>
          <p>8.2.Продавець не несе відповідальності:</p>
          <p>за змінений виробником зовнішній вигляд Товару;</p>
          <p>
            {" "}
            за незначну невідповідність колірної гами товару, що може
            відрізнятися від оригіналу товару виключно через різну колірну
            передачу моніторів персональних комп'ютерів окремих моделей і
            мобільних пристроїв;
          </p>
          <p>
            {" "}
            за зміст і правдивість інформації, наданої Покупцем при оформленні
            замовлення;
          </p>
          <p>
            {" "}
            за затримку і перебої в наданні Послуг (обробки замовлення і
            доставки товару), які відбуваються з причин, що знаходяться поза
            сферою контролю Продавця;
          </p>
          <p>
            {" "}
            8.3.В разі настання обставин непереборної сили, сторони звільняються
            від виконання умов цього Договору. Під обставинами непереборної сили
            для цілей цього Договору розуміються події, що мають надзвичайний,
            непередбачуваний характер, які виключають або об'єктивно заважають
            виконанню цього Договору. Настання яких Сторони не могли передбачити
            і запобігти.
          </p>
          <p>
            {" "}
            8.4.Сторони прикладуть максимум зусиль для вирішення будь-яких
            розбіжностей виключно шляхом переговорів
          </p>
          <p> Відповідальність сторін</p>
          <p>
            {" "}
            9.1.Інтернет-магазин залишає за собою право в односторонньому
            порядку вносити зміни до цього Договору, за умови попередньої
            публікації його на сайті {link}
          </p>
          <p>
            {" "}
            9.2.Інтернет-магазин створений для організації дистанційного способу
            продажу товарів через Інтернет.
          </p>
          <p>
            {" "}
            9.3.Покупець несе відповідальність за достовірність інформації,
            зазначеної при оформленні замовлення. При здійсненні акцепту
            (оформленні замовлення і подальшої оплати товару) Покупець надає
            Продавцю свою беззастережну згоду на збір, обробку, зберігання,
            використання своїх персональних даних, згідно ЗУ «Про захист
            персональних даних».
          </p>
          <p>
            {" "}
            9.4.Оплата Покупцем оформленого в Інтернет-магазині замовлення,
            означає повну згоду Покупця з умовами договору купівлі-продажу
            (публічної оферти).)
          </p>
          <p>
            {" "}
            9.5.Фактичною датою електронної угоди між сторонами є дата прийняття
            умов, відповідно до статті 11 Закону України «Про електронну
            комерцію».
          </p>
          <p>
            {" "}
            9.6.Перегляд товарів і процес оформлення замовлення для Покупця є
            безкоштовним.
          </p>
          <p>
            {" "}
            9.7.Інформація, що надається Покупцем, є конфіденційною.
            Інтернет-магазин використовує інформацію про Покупця виключно в
            цілях обробки замовлення, відправлення повідомлень Покупцеві,
            доставки товару, здійснення взаєморозрахунків та інших дій,
            пов'язаних з виконанням замовлення.
          </p>
          <p> Порядок повернення товару належної якості</p>
          <p>
            {" "}
            10.1.Повернення товару в Інтернет-магазин відбувається згідно до
            чинного щаконодавства України.
          </p>
          <p>
            {" "}
            10.2.Повернення Товару належної якості в Інтернет-магазин
            відбувається за рахунок Покупця.
          </p>
          <p>
            {" "}
            10.3.При поверненні Покупцем товару належної якості,
            Інтернет-магазин повертає йому виплачену за Товар грошову суму за
            фактом повернення, за вирахуванням компенсації витрат
            Інтернет-магазину, пов'язаних з доставкою Товару Покупцеві.
          </p>
          <p> Термін дії договору</p>
          <p>
            {" "}
            11.1.Електронний договір вважається укладеним з моменту одержання
            особою, яка направила пропозицію укласти такий договір, відповіді
            про прийняття цієї пропозиції в порядку, визначеному частиною шостою
            статті 11 Закону України «Про електронну комерцію».
          </p>
          <p>
            {" "}
            11.2.До закінчення терміну дії, цей Договір може бути розірваний за
            взаємною згодою сторін до початку процесу фактичної доставки товару,
            шляхом повернення грошових коштів.
          </p>
          <p>
            {" "}
            11.3.Сторони мають право розірвати цей Договір в односторонньому
            порядку, в разі невиконання однією із сторін умов цього Договору, та
            у випадках передбачених чинним законодавством України.
          </p>
          <p>
            {" "}
            Звертаємо вашу увагу, що інтернет-магазин {link} на офіційному
            інтернет-сайті {link}, має право, відповідно до законодавства
            України, надавати право користування інтернет платформою ФОП і
            юридичним особам для реалізації товару.
          </p>
        </div>
      </article>
    </ModalWrapper>
  );
};

export default memo(AssignBlock);
