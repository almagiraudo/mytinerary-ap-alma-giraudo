import HomeButton from "../components/HomeButton"
import HomeParagraph from "../components/HomeParagraph"
import HomeTitle from "../components/HomeTitle"

export default function Home() {
    let data = [
        { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
        { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
        { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
        { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
        { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
        { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
        { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
        { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
        { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
        { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
        { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
        { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
        { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
        { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
        { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
        { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
    ]
    return (
        <div className="pt-[200px] flex center justify-between ">
            
                <div className="flex flex-col justify-center w-[850px] items-start gap-[40px]; ">
                    <HomeTitle />
                    <HomeParagraph />
                    <HomeButton />
                </div>
                <div className="">
                <img src={data[1].photo} alt={data[1].id} />
                <p className="text-[20px] ">{data[1].city } </p>
            </div>
            
        </div>

    )
}
