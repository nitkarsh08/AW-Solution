export default function Testimonials(){
return(
<section className="py-24 px-6">
<div className="max-w-6xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-12">
Client Reviews
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[1,2,3].map(i=>(

<div key={i}
className="bg-white/5 border border-white/10 rounded-2xl p-6">

<div className="w-16 h-16 rounded-full bg-blue-600 mx-auto mb-4"></div>

<h3>Happy Client</h3>

<p className="text-gray-400 mt-3">
Professional work, fast delivery and excellent communication.
</p>

</div>

))}

</div>
</div>
</section>
)
}