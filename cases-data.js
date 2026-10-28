
/* ILMO Health — 400 Clinical Pharmacy Cases
   Educational use only. Review with current clinical references.
   Keep this file name: cases-data.js
*/
"use strict";

window.ILMO_CASES = [];

const drugs = [
["Captopril","Hypertension / heart failure","persistent dry cough or dizziness","blood pressure, potassium, renal function","face or tongue swelling","review pregnancy, kidney function and potassium","Cardiovascular","القلب والأوعية الدموية"],
["Enalapril","Hypertension / heart failure","dry cough or dizziness","blood pressure, potassium, renal function","facial swelling or fainting","review interactions and monitoring; do not self-adjust","Cardiovascular","القلب والأوعية الدموية"],
["Lisinopril","Hypertension / heart failure","cough or postural dizziness","blood pressure, potassium, renal function","throat swelling or collapse","check pregnancy status and prescribed monitoring","Cardiovascular","القلب والأوعية الدموية"],
["Losartan","Hypertension / selected cardiac and renal conditions","dizziness or raised potassium risk","blood pressure, potassium, renal function","facial swelling or severe weakness","review potassium supplements and pregnancy status","Cardiovascular","القلب والأوعية الدموية"],
["Valsartan","Hypertension / heart failure","dizziness or raised potassium risk","blood pressure, potassium, renal function","facial swelling or collapse","do not change the dose without the prescriber","Cardiovascular","القلب والأوعية الدموية"],
["Sacubitril/valsartan","Selected heart failure","dizziness or low blood pressure","blood pressure, potassium, renal function","severe breathlessness or facial swelling","never overlap with an ACE inhibitor; prescribed washout is required","Cardiovascular","القلب والأوعية الدموية"],
["Amlodipine","Hypertension / angina","ankle swelling or headache","blood pressure and symptoms","severe chest pain or fainting","report troublesome swelling; not rescue treatment for acute chest pain","Cardiovascular","القلب والأوعية الدموية"],
["Verapamil","Selected arrhythmia / angina / hypertension","constipation or slow pulse","pulse, blood pressure, interacting medicines","fainting or marked slow heartbeat","review other rate-slowing medicines","Cardiovascular","القلب والأوعية الدموية"],
["Bisoprolol","Selected cardiovascular conditions","fatigue or slow pulse","pulse, blood pressure and symptoms","fainting or severe wheezing","do not stop abruptly without medical advice","Cardiovascular","القلب والأوعية الدموية"],
["Propranolol","Selected cardiac / neurologic conditions","slow pulse or wheezing","pulse, blood pressure and response","severe wheezing or collapse","wheezing/asthma requires clinician review; do not stop abruptly","Cardiovascular","القلب والأوعية الدموية"],
["Furosemide","Fluid overload / edema","dizziness or dehydration","weight, fluid status, renal function, electrolytes","collapse, confusion or severe dehydration","take only as prescribed; do not increase dose independently","Cardiovascular","القلب والأوعية الدموية"],
["Spironolactone","Selected heart failure / fluid retention","raised potassium or breast tenderness","potassium and renal function","palpitations or profound weakness","avoid unsupervised potassium supplements and salt substitutes","Cardiovascular","القلب والأوعية الدموية"],
["Atorvastatin","Lipid lowering","unexplained muscle pain","lipid response and indicated safety monitoring","severe muscle symptoms with dark urine","report muscle symptoms and review interactions","Cardiovascular","القلب والأوعية الدموية"],
["Rosuvastatin","Lipid lowering","unexplained muscle pain","lipid response and indicated safety monitoring","severe muscle symptoms with dark urine","do not double a missed dose","Cardiovascular","القلب والأوعية الدموية"],
["Ezetimibe","Cholesterol lowering","muscle symptoms, especially in combination","lipid response and regimen-specific monitoring","severe unexplained muscle symptoms","review the complete lipid-lowering regimen","Cardiovascular","القلب والأوعية الدموية"],
["Aspirin","Antiplatelet therapy / selected pain indications","stomach irritation or bruising","bleeding symptoms and treatment indication","vomiting blood or black stools","check bleeding history; do not stop prescribed antiplatelet therapy without advice","Hematology","أمراض الدم"],
["Clopidogrel","Selected vascular conditions","bruising or bleeding","bleeding signs and adherence","uncontrolled bleeding or sudden neurologic symptoms","do not stop after a stent without the treating clinician","Hematology","أمراض الدم"],
["Warfarin","Anticoagulation","bruising or possible bleeding","INR and bleeding symptoms","major bleeding, head injury or severe sudden headache","check INR plan, interactions and major diet changes","Hematology","أمراض الدم"],
["Enoxaparin","Selected clot prevention / treatment","injection-site bruising","bleeding, renal function and platelets when indicated","major bleeding or sudden chest pain/breathlessness","use the prescribed dose and injection technique","Hematology","أمراض الدم"],
["Dabigatran","Selected anticoagulation indications","bleeding or indigestion","renal function and bleeding risk","major bleeding or head injury","follow product-specific missed-dose instructions; do not double doses","Hematology","أمراض الدم"],
["Nitroglycerin (GTN)","Prescribed angina relief","headache or dizziness","symptom pattern and prescribed use plan","persistent chest pain after the first prescribed dose","follow the emergency plan; never combine with PDE-5 inhibitors","Cardiovascular","القلب والأوعية الدموية"],
["Salbutamol","Relief of bronchospasm","tremor or palpitations","symptom control, inhaler technique, reliever frequency","severe breathlessness or poor response to rescue inhaler","check inhaler technique and asthma action plan","Respiratory","الجهاز التنفسي"],
["Ipratropium","Selected obstructive airway conditions","dry mouth or eye exposure","symptoms and device technique","eye pain/blurred vision after exposure or severe breathlessness","avoid spraying mist into the eyes","Respiratory","الجهاز التنفسي"],
["Amoxicillin","Selected bacterial infections","rash or diarrhea","clinical response and allergy history","breathing difficulty or facial swelling","verify penicillin allergy; antibiotics do not treat viral infections","Infectious Diseases","الأمراض المعدية"],
["Doxycycline","Selected bacterial infections","sun sensitivity or oesophageal irritation","response, adherence and product instructions","severe allergic reaction or severe headache with visual symptoms","follow label directions; pregnancy and child use need professional assessment","Infectious Diseases","الأمراض المعدية"],
["Rifampicin","Combination tuberculosis regimens","orange-red body fluids or drug interactions","adherence, liver symptoms and interactions","jaundice or severe abdominal symptoms","use only as part of the prescribed regimen; check interactions carefully","Infectious Diseases","الأمراض المعدية"],
["Isoniazid","Prescribed tuberculosis regimens","numbness/tingling or liver-related symptoms","adherence and liver symptoms","jaundice or persistent vomiting","follow the regimen; report neuropathy and liver warning signs","Infectious Diseases","الأمراض المعدية"],
["Nitrofurantoin","Selected lower urinary tract infections","nausea or dark urine","response, renal suitability and course","fever with flank pain or breathing difficulty","suspected kidney infection needs clinical assessment","Renal","الكلى والمسالك البولية"],
["Fluconazole","Selected fungal infections","rash or interaction concerns","clinical response and interaction review","severe rash or jaundice","review pregnancy, liver history and other medicines","Infectious Diseases","الأمراض المعدية"],
["Nystatin","Selected Candida infections","local irritation or incorrect formulation use","response and correct formulation","difficulty breathing/swallowing or worsening widespread symptoms","use the exact prescribed formulation and instructions","Infectious Diseases","الأمراض المعدية"],
["Mebendazole","Selected worm infections","abdominal discomfort","symptom response and product instructions","severe abdominal pain or worsening symptoms","confirm age, likely parasite and product instructions","Infectious Diseases","الأمراض المعدية"],
["Metformin","Type 2 diabetes","gastrointestinal effects","glucose/HbA1c and renal function as directed","rapid/deep breathing, severe weakness or confusion","review renal function and sick-day instructions with the prescriber","Endocrine","الغدد والسكري"],
["Insulin","Diabetes requiring insulin","hypoglycemia or device/dose error","glucose trends, injection technique and storage","severe hypoglycemia, seizure or unconsciousness","verify insulin type and device every time; follow prescribed dose","Endocrine","الغدد والسكري"],
["Levothyroxine","Hypothyroidism","symptoms of under/over-replacement","thyroid tests at clinician-directed intervals","chest pain or severe palpitations","take consistently and review supplement timing with a pharmacist","Endocrine","الغدد والسكري"],
["Omeprazole","Selected acid-related disorders","persistent symptoms or long-term-use questions","indication, response and duration","vomiting blood, black stools or progressive swallowing difficulty","review duration and alarm symptoms rather than endlessly self-treating","Gastrointestinal","الجهاز الهضمي"],
["Loperamide","Selected uncomplicated diarrhea","constipation or inappropriate use","hydration, symptom duration and warning signs","bloody diarrhea, high fever or severe dehydration","avoid self-treatment when red flags are present; prioritize rehydration","Gastrointestinal","الجهاز الهضمي"],
["Paracetamol (acetaminophen)","Pain / fever","duplicate ingredients or overdose risk","total intake from all products","suspected overdose or jaundice","check combination products and label limits; overdose needs urgent advice even if well","Pain","الألم والعضلات والمفاصل"],
["Ibuprofen","Selected pain / inflammation","stomach irritation or reduced kidney function","pain response, renal/GI risks and other medicines","vomiting blood, black stools or severe allergic reaction","screen for ulcers, anticoagulants, kidney disease, heart failure and pregnancy","Pain","الألم والعضلات والمفاصل"],
["Timolol eye drops","Selected glaucoma","slow pulse, dizziness or wheezing","eye-pressure follow-up and systemic symptoms","fainting, severe wheezing or marked slow pulse","use correct eye-drop technique and report systemic symptoms","Ophthalmology","طب العيون"],
["Hydrocortisone topical","Selected inflammatory skin conditions","irritation or skin thinning with excessive use","site, strength, duration and response","rapidly spreading infection or severe skin reaction","use only on the directed site and for the prescribed duration","Dermatology","الجلدية"]
];

const topics = [
{
name:"Adverse effect",
ar:"الأعراض الجانبية",
question:"ما التصرف الآمن عند ظهور عرض جانبي محتمل؟",
correct:"تقييم شدة العرض وتوقيته، ومراجعة الدواء والأسباب الأخرى، والتواصل مع الواصف عند الحاجة؛ علامات الخطر تستوجب تقييماً عاجلاً.",
wrong1:"طمأنة المريض دائماً بأن العرض غير مهم دون تقييم.",
wrong2:"إيقاف العلاج أو تغيير الجرعة نهائياً دون مراجعة الحالة."
},
{
name:"Interactions",
ar:"التداخلات الدوائية",
question:"قبل إضافة دواء أو مكمل جديد، ما الخطوة الأنسب؟",
correct:"مراجعة الأدوية الموصوفة وغير الموصوفة والمكملات، والتحقق من التداخل المحدد، ثم الاتفاق على خطة آمنة مع الصيدلي أو الواصف.",
wrong1:"افتراض أن الأدوية التي تُشترى دون وصفة لا تتداخل.",
wrong2:"بدء العلاجين معاً وعدم المراجعة إلا عند حدوث مشكلة خطيرة."
},
{
name:"Monitoring",
ar:"المراقبة",
question:"ما خطة المتابعة الأنسب للمريض؟",
correct:"اختيار الفحوص والمتابعة المناسبة للاستطباب وعوامل الخطورة، وفق خطة الواصف والإرشادات الحالية.",
wrong1:"تجاهل المراقبة لأن الدواء شائع الاستخدام.",
wrong2:"طلب جميع الفحوص الممكنة دون مراعاة الحالة أو الخطورة."
},
{
name:"Counselling",
ar:"إرشاد المريض",
question:"ما أفضل طريقة لإرشاد المريض؟",
correct:"شرح هدف العلاج وطريقة الاستخدام الخاصة بالمنتج والتحذيرات ومتى يطلب المساعدة، ثم التأكد من فهم المريض.",
wrong1:"ذكر الاسم التجاري فقط وافتراض أن المريض يعرف طريقة الاستخدام.",
wrong2:"نصح المريض بتغيير الجرعة كلما تغيرت الأعراض."
},
{
name:"Contraindications",
ar:"موانع الاستعمال",
question:"ما الذي يجب مراجعته قبل التوصية بالعلاج أو الاستمرار به؟",
correct:"مراجعة الحساسية والأمراض المصاحبة ووظائف الأعضاء والحمل عند انطباقه وقائمة الأدوية، وتوضيح المخاوف مع الواصف.",
wrong1:"التوصية بالدواء قبل مراجعة التاريخ المرضي.",
wrong2:"افتراض أن الدواء آمن بنفس الطريقة لكل المرضى."
},
{
name:"Missed dose",
ar:"الجرعة المنسية",
question:"نسي المريض جرعة، فما النصيحة الأكثر أماناً؟",
correct:"اتباع تعليمات المنتج المحدد أو سؤال الصيدلي؛ لا تُضاعف الجرعة التالية إلا إذا نصّت التعليمات الرسمية على ذلك.",
wrong1:"أخذ جرعتين معاً لتعويض الجرعة المنسية.",
wrong2:"إيقاف العلاج نهائياً بسبب نسيان جرعة واحدة."
},
{
name:"Duplicate ingredients",
ar:"تكرار المادة الفعالة",
question:"يستخدم المريض منتجاً آخر للعرض نفسه، فما الخطوة المناسبة؟",
correct:"مطابقة المواد الفعالة والتراكيز في جميع المنتجات لمنع التكرار، ثم تحديد خطة متوافقة مع النشرة وتعليمات الواصف.",
wrong1:"افتراض أن اختلاف الاسم التجاري يعني اختلاف المادة الفعالة.",
wrong2:"تشجيع استخدام المنتجين معاً للحصول على مفعول أسرع."
},
{
name:"Lack of response",
ar:"عدم تحسن الأعراض",
question:"لم تتحسن الأعراض كما هو متوقع، ماذا تفعل؟",
correct:"إعادة تقييم التشخيص والالتزام وطريقة الاستخدام والمدة والتداخلات وعلامات الخطر، مع ترتيب مراجعة سريرية بدلاً من تعديل الجرعة عشوائياً.",
wrong1:"زيادة الجرعة دون التحقق من سبب عدم التحسن.",
wrong2:"إضافة دواء آخر فوراً دون مراجعة الخطة الحالية."
},
{
name:"Red flags",
ar:"علامات الخطر",
question:"ما التصرف الآمن عند وجود علامة خطر؟",
correct:"ترتيب تقييم طبي عاجل أو إسعافي حسب شدة الأعراض، وعدم تأخير الرعاية بمحاولة علاج ذاتي روتيني.",
wrong1:"طمأنة المريض والانتظار عدة أيام مهما كانت شدة العرض.",
wrong2:"تجربة منتج دون وصفة وتجنب الإحالة الطبية."
},
{
name:"Adherence",
ar:"الالتزام بالعلاج",
question:"يواجه المريض صعوبة في الالتزام، فما التصرف الأنسب؟",
correct:"فهم سبب الصعوبة، وتقديم إرشاد عملي مناسب، والتنسيق مع الواصف قبل تغيير النظام العلاجي.",
wrong1:"لوم المريض دون تقديم دعم عملي.",
wrong2:"نصح المريض بإيقاف العلاج حتى يصبح الالتزام أسهل."
}
];

const levels = [
 {key:"beginner",name:"مبتدئ"},
 {key:"intermediate",name:"متوسط"},
 {key:"advanced",name:"متقدم"}
];

function makeCase(drug, drugIndex, topic, topicIndex) {
  const level = levels[(drugIndex + topicIndex) % 3];
  const id = drugIndex * topics.length + topicIndex + 1;
  const intros = [
    "راجع المريض الصيدلية أثناء استخدام",
    "في زيارة متابعة، يسأل المريض عن سلامة استخدام",
    "أثناء مراجعة الأدوية، يذكر المريض أنه يستخدم",
    "يسأل أحد مقدمي الرعاية عن الاستخدام الصحيح لدواء"
  ];
  const levelFocus = {
    beginner:"التركيز على مبدأ السلامة الأساسي والخطوة الأولى.",
    intermediate:"مراعاة عوامل الخطورة والتداخلات والمتابعة.",
    advanced:"دمج التقييم السريري وموانع الاستعمال والمراقبة والإحالة."
  };

  let correct = topic.correct;
  if (topicIndex === 0) correct += " العرض المرتبط بهذا الدواء: " + drug[2] + ".";
  if (topicIndex === 2) correct += " المتابعة الخاصة بالدواء: " + drug[3] + ".";
  if (topicIndex === 3) correct += " إرشاد مهم: " + drug[5] + ".";
  if (topicIndex === 8) correct += " علامة خطر مهمة في هذا السياق: " + drug[4] + ".";

  // Correct answer is deliberately placed at index 1.
  // index 1 matches the existing index.html answerCase() logic.
  return {
    id:id,
    system:drug[6],
    systemAr:drug[7],
    level:level.key,
    levelName:level.name,
    title:drug[0] + " — " + topic.ar + " (" + level.name + ")",
    text:intros[(drugIndex + topicIndex) % intros.length] +
      " " + drug[0] + " لعلاج " + drug[1] +
      ". يذكر المريض: " + drug[2] +
      ". " + topic.question + " " + levelFocus[level.key] +
      " ضع في الحسبان: " + drug[5] + ".",
    options:[
      topic.wrong1,
      correct,
      topic.wrong2
    ],
    answer:1,
    explanation:
      "التفسير: " + correct +
      " معلومات خاصة بالدواء: " + drug[3] +
      ". علامات تستدعي الانتباه: " + drug[4] +
      ". يجب التحقق من النشرة الرسمية والإرشادات السريرية الحديثة، ولا تُستخدم هذه الحالة لاتخاذ قرار علاجي لمريض بعينه.",
    sourceTitle:"MedlinePlus Drug Information / DailyMed — verify the specific product",
    sourceUrl:"https://medlineplus.gov/druginformation.html",
    drug:drug[0],
    educationalTemplate:true
  };
}

drugs.forEach((drug, drugIndex) => {
  topics.forEach((topic, topicIndex) => {
    window.ILMO_CASES.push(
      makeCase(drug, drugIndex, topic, topicIndex)
    );
  });
});

console.log("ILMO Health cases loaded:", window.ILMO_CASES.length);
