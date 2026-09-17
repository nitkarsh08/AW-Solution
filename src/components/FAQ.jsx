const faqs=[
["How long does it take?","Usually 3–14 days depending on project."],
["Do you provide maintenance?","Yes, monthly maintenance plans are available."],
["Do you build mobile apps?","Yes, Android and iOS solutions are available."]
]

export default function FAQ(){
return(
<section className="py-24 bg-zinc-950 px-6">

<div className="max-w-4xl mx-auto">

<h2 className="text-4xl text-center font-bold mb-12">
Frequently Asked Questions
</h2>

{faqs.map((faq,i)=>(

<div key={i} className="border-b border-white/10 py-6">

<h3 className="font-semibold text-lg">{faq[0]}</h3>

<p className="text-gray-400 mt-2">{faq[1]}</p>

</div>

))}

</div>
</section>
)
}