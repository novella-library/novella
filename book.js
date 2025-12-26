// قراءة الرابط
const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

// عناصر HTML
const title = document.getElementById("book-title");
const image = document.getElementById("book-image");
const description = document.getElementById("book-desc");
const price = document.getElementById("book-price");
const page = document.getElementById("book-page");

// قاعدة بيانات الكتب
const books = {
    "A1": {
        title: "قصة ليلى و لومي",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 8",
        desc: "تبدأ الحكاية في غابة هادئة تتغيّر ملامحها في ليلة غامضة، عندما يسقط ضوء صغير من السماء ويختفي بين الأشجار. من تلك اللحظة، تنطلق مغامرة مليئة بالغموض والاكتشاف، حيث تتقاطع الصداقة مع الشجاعة، ويصبح كل قرار خطوة في طريق غير متوقّع. قصة دافئة للأطفال عن الأمل، والمثابرة، وقوة الضوء الصغير في مواجهة الظلام."
    },
    "A2": {
        title: "الروايات",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "روايات مشوقة تأخذك إلى عوالم مختلفة."
    },
    "A3": {
        title: "كتب مفيدة",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "كتب تعليمية وتطويرية تفيدك في حياتك."
    },
    //---------------------------------------------------
    "B1": {
        title: "قصة ليلى و لومي",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "قصة ممتعة لمغامرة النجمة الصغيرة"
    },
    "B2": {
        title: "الروايات",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "روايات مشوقة تأخذك إلى عوالم مختلفة."
    },
    "B3": {
        title: "كتب مفيدة",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "كتب تعليمية وتطويرية تفيدك في حياتك."
    },
    //---------------------------------------------------
    "C1": {
        title: "قصة ليلى و لومي",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "قصة ممتعة لمغامرة النجمة الصغيرة"
    },
    "C2": {
        title: "الروايات",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "روايات مشوقة تأخذك إلى عوالم مختلفة."
    },
    "C3": {
        title: "كتب مفيدة",
        image: "Photo/1.jpg",
        price: "400.00 DAZ",
        page: "عدد الصفحات : 08",
        desc: "كتب تعليمية وتطويرية تفيدك في حياتك."
    },
};

// عرض البيانات
if (books[bookId]) {
    title.textContent = books[bookId].title;
    image.src = books[bookId].image;
    price.textContent = books[bookId].price;
    page.textContent = books[bookId].page;
    description.textContent = books[bookId].desc;
} else {
    title.textContent = "كتاب غير موجود";
    description.textContent = "عذراً، هذا الكتاب غير متوفر.";
    image.style.display = "none";
}

const chatBtn = document.getElementById("chat-btn");
const chatOptions = document.getElementById("chat-options");

chatBtn.addEventListener("click", () => {
    chatOptions.classList.toggle("show");
});


// زر الرجوع
document.getElementById("back-btn").addEventListener("click", () => {
    window.history.back();
});
