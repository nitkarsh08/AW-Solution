const steps=["Consultation","Planning","Design","Development","Testing","Deployment","Support"]

export default function Process(){
return(
<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">

<h2 className="text-4xl text-center font-bold mb-14">
Our Process
</h2>

<div className="grid md:grid-cols-7 gap-4">

{steps.map((step,i)=>(

<div key={i} className="text-center">

<div className="w-14 h-14 rounded-full bg-blue-600 mx-auto flex items-center justify-center font-bold">
{i+1}
</div>

<p className="mt-3 text-sm">{step}</p>

</div>

))}

</div>

</div>
</section>
)
}