

function Feedback({title, state}){
return(
<div className="">
{title &&  <h2 className="">{title}</h2>}
<ul className="button">
<button>good</button>
<button>neutral</button>
<button>bad</button>
</ul>
<h2>Statistics</h2>
<ul>
  <li>Good:</li>
  <li>Neutral:</li>
  <li>Bad:</li>
</ul>
</div>

)

}


export default Feedback
