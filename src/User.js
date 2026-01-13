export const Riccardo = () => {

    const name = "Riccardo";
    const surname = "Cariello";
    const age = 28;
    const email = "riccardo.c1995@outlook.com";
  
  
  
    return(
      <div >
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h4>{email}</h4>
        <h4>{age}</h4>
      </div>
    )
  
  }


  
export const User = (props) => {

    return(
      <div >
        <h2>{props.name}</h2>
        <h2>{props.surname}</h2>
        <h4>{props.email}</h4>
        <h4>{props.age}</h4>
      </div>
    )
  
  }
  