const plans=[
{name:"Starter",price:"$99",features:["Landing Page","1-3 Pages","Domain Free","Responsive","Basic SEO"]},
{name:"Business",price:"$299",features:["Multi-page","1-9 Pages","Domain Free","Admin Panel","SEO"]},
{name:"Premium",price:"Custom",features:["Web App","MERN Stack","Payment Integration","Support"]}
]

export default function Pricing(){
return(
<section id="pricing" className="py-24 bg-zinc-950 px-6">

<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
<h2 className="text-4xl text-center font-bold mb-12">
Pricing
</h2>

<div className="grid md:grid-cols-3 gap-8">

{plans.map((plan,i)=>(

<div key={i}
className={`rounded-3xl p-8 border ${i===1?"border-blue-500":"border-white/10"} bg-black`}>

<h3 className="text-2xl font-bold">{plan.name}</h3>

<p className="text-4xl text-blue-500 my-5">{plan.price}</p>

{plan.features.map((f,j)=><p key={j} className="py-2 text-gray-300">✓ {f}</p>)}

<button className="w-full mt-6 bg-blue-600 py-3 rounded-xl">
Get Started
</button>

</div>

))}

</div>
</div>
</section>
)
}