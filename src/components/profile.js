import { getImageUrl } from "./getImage";

function Card({title, children}) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}

function Image(props) {
    console.log(props)
    const {size, ...obj} = props;
    console.log(obj)
    return (
        <img
        className="avatar"
        src={obj.src}
        alt={obj.alt}
        width={size}
        height={size}
        />
    )
}

export default function Profile() {
    return (
        <div>
        <Card title="ZAGO:OV">
            <Image src="https://i.imgur.com/OKS67lhm.jpg" 
                   alt="Aklilu Lemma"
                   size={70}
             />      
        </Card>
        <Card title="HHHH">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis itaque nihil atque veritatis culpa architecto nam necessitatibus non quisquam. Cumque amet labore, sunt autem cum at modi ab mollitia.</p>
        </Card>
        </div>
    );
}