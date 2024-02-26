let nav = document.getElementById('navCon')
let servicesContainer =document.getElementById('specialties-details')
let btnMenu = document.querySelector('.btn-menu')
let menu = document.querySelector('.menu')
let closeMenuButtons = document.querySelectorAll('.close-menu')


AOS.init();


let services = [
    "تأسيس الشركات",
    "صياغة عقود",
    "تقسيم تركات",
    "تحصيل ديون",
    "استخراج حجج إستحكام",
    "تسجيل براءة إختراع",
    "توثيق وكالات وعقود",
    "تمثيل قانوني وترافع",
    "إعداد مذكرات قانونية",
    "تسجيل علامات تجارية",
    "تحقيق",
    "المنشئات التجارية وريادة الأعمال",
    "الوكالات التجارية",
    "العلاقات العمالية",
    "الطاقة والتعدين",
    "الخدمات المالية",
    "تسوية المنازعات",
    "القضايا الإدارية والجنائية",
    "حقوق الملكية الفكرية",
    "الإستثمارات الصناعية",
    "العقود الحكومية",
    "النقل البحري",
    "تراخيص التصدير وإجراءات الإستيراد",
    "والجمارك وقوانين المقاطعة",
    "الأحوال الشخصية",
    "الترجمة القانونية",
    "أوراق تجارية",
    "قانون المعلومات وخصوصية البيانات والأمن السيبراني",
    "أسهم وأوراق مالية",
    "مكافحة الإحتكار والمنافسة",
    "الترفيه والرياضة والإعلام",
    "الخدمات المصرفية",
    "قانون الإتصالات",
    "المصرفية الإسلامية",
    "إعادة الهيكلة والإعسار والتدريبات",
    "المشتقات",
    "الدعاوى التجارية المعقدة",
    "حوكمة الشركات",
    "حقوق الدائنين والتقاضي بالإفلاس",
    "الإستعانة بمصادر خارجية",
    "الشركات الناشئة",
    "البيئة والإراضي والموارد",
    "صناديق الإستثمار",
    "التنظيم المالي",
    "الزكاة والضرائب",
    "العقارات",
    "تغطية التأمين",
    "الماليه العامه",
    "الاعفاء الجمركية والضرائب",
    "اعادة الهيكله والاعسار والتدريبات",
    "المسئوليه المهنية",
    "اعادة الهيكله والاعسار والتدريبات",
    "التمويل المنظم",
    "تحكيم منازعات",
    "توثيق وكلات وعقود",
    "معاملات التكنولوجيا",
    "ضوابط التصدير",
    "العقوبات الاقتصاديه والجمارك",
    "الرعايه الصحية وعلوم الحياة",
    "حقوق الملكية الخاصة",
    "تمويل الاسهم الخاصه",
    "المسئولية",
    "المنتج",
    "الدعاوي الاجماعيه والاجراءات",
    "لفئة المستهلك",
    "تطوير المشاريع والتمويل",
    "قضايا التامين",
    "قضايا لجنة المنازعات المصرفيه",
    "قضايا الطيران المدني",
    "التحكيم الدولي",
    "ترجمة العقود"
]


window.onload = ()=>{
    if(window.scrollY >= 150){
        nav.classList.add('bg-main-dark')
        // console.log(nav);
    }else{
        nav.classList.remove('bg-main-dark')
    }
}


window.onscroll = ()=>{
    if(window.scrollY >= 150){
        nav.classList.add('bg-main-dark')
        // console.log(nav);
    }else{
        nav.classList.remove('bg-main-dark')
    }
}

console.log(servicesContainer);

servicesContainer.innerHTML = ``

services.forEach((value, index) => {
    if(index % 2 == 0){
        servicesContainer.innerHTML += `<div class="odd py-1 px-3 rounded-full">${value}</div>`
    }else{
        servicesContainer.innerHTML += `<div class="even py-1 px-3 rounded-full">${value}</div>`
    }
})

btnMenu.addEventListener('click',(e)=>{
    console.log(e,"click");
    menu.classList.toggle('active')
})

closeMenuButtons.forEach(el=>{
    el.addEventListener('click',(e)=>{
        console.log(e,"click");
        menu.classList.remove('active')
    })
})