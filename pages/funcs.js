import Link from "next/link";

const formatCash = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};



export function Site(props) {
  return (
    <div class="col hej">
      <a href={props.link}><h1 class="site center">{props.text}</h1></a>
    </div>
  )
}

export function Break() {
  return (
    <div class="col-1"></div>
  )
}


export function Cat(props) {
  return (
    <div class="col">
      <h6><b>{props.text}</b></h6>
    </div>
  )
}

export function Coin(props) {

  return (
    <Link href={{ pathname: "coins/[id]", query: { id: props.id } }}>
      <a class="nodec"><div class="row select">
        <div class="col-1">
          <img src={props.logo} alt={props.name} width="40%" />
        </div>
        <div class="col verticalLine">
          <h6><bold>{props.name}</bold></h6>
        </div>
        <div class="col verticalLine">
          <h6><bold>{props.price}$</bold></h6>
        </div>
        <div class="col verticalLine">
          <h6><bold>{formatCash(props.market)}</bold></h6>
        </div>
        <div class={`${props.change < 0 ? 'negative' : 'positive'} col verticalLine`}>
          <h6><bold>{props.change}%</bold></h6>
        </div>
      </div></a>
    </Link>
    
   



  )
}
export function cur() {

}