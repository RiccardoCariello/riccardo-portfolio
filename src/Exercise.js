

export function Planets () {

    const planets = [
    {name: "Mars", isGasPlanet:false},
    {name: "Earth", isGasPlanet:false},
    {name: "Jupiter", isGasPlanet:true},
    {name: "Venus", isGasPlanet:false},
    {name: "Neptune", isGasPlanet:true},
    {name: "Uranus", isGasPlanet:true},


    ];

    return (
        planets.map((planet , key ) => {
            if(planet.isGasPlanet == true){
                return <h1 key={key}> {planet.name}</h1>
            }
        })
       
    );
}