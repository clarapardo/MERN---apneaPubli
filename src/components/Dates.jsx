import Card from "./Card";

const Dates = () => {

    return (
        <section className="dates">
            <h1>Upcoming courses</h1>
            <div className="cards_section">
                <Card title="AIDA 2" dates="14-16th april" location="Radazul, Tenerife" idx="001"></Card>
                <Card title="AIDA 1" dates="23-25th may" location="Red Sea, Egypt" idx="002"></Card>
                <Card title="AIDA 4" dates="23-25th jun" location="Maldives" idx="003"></Card>
                <Card></Card>
            </div>
        </section>
    )
}

export default Dates;