import { Card } from "../Card";

export const Column = ({ title }) => {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                <Card cardTitle="Web Design" colour="_orange" />
                <Card cardTitle="Research" colour="_green" />
                <Card cardTitle="Web Design" colour="_orange" />
                <Card cardTitle="Copywriting" colour="_purple" />
                <Card cardTitle="Web Design" colour="_orange" />
            </div>
        </div>
    )
}