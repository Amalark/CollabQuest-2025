

import ProjectCard from "./ProjectCard"
import { CardDemo } from "./CardDemo"
export default function Project() {
    const projectData = [
        {
            img: "https://images.unsplash.com/photo-1600351473760-e23b8bbd56f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjg0OXwwfDF8c2VhcmNofDh8fGZhbGwtc2NyZWVufGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80",
            title: "Minecraft",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis in nunc gravida vulputate. Suspendisse maximus risus id convallis fringilla. Duis sit amet enim felis. "
        },
        {
            img: "https://images.unsplash.com/photo-1603812272283-e82b7d8c767d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjg0OXwwfDF8c2VhcmNofDJ8fGV2ZW5nZXxlbnwwfDB8fDB8fHx8&ixlib=rb-1.2.1&q=80",
            title: "The Witcher 3: Wild Hunt",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis in nunc gravida vulputate. Suspendisse maximus risus id convallis fringilla. Duis sit amet enim felis. "
        },
        {
            img: "https://images.unsplash.com/photo-1568667474-3ef0601c7b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjg0OXwwfDF8c2VhcmNofDQxfHxVb3R3Y2FzdHxlbnwwfDB8fDB8fHx8&ixlib=rb-1.2.1&q=80",
            title: "Overwatch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis in nunc gravida vulputate. Suspendisse maximus risus id convallis fringilla. Duis sit amet enim felis. "
        },
        {
            img: "https://images.unsplash.com/photo-1607590308592-4d1804fc689b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjg0OXwwfDF8c2VhcmNofDkxfHxOZXV0cmFsaW5lJTIwQ2FsbCZhbGwgb2YgVGFmJTIwQm90c3xlbnwwfDB8fDB8fHx8&ixlib=rb-1.2.1&q=80",
            title: "Red Dead Redemption 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis in nunc gravida vulputate. Suspendisse maximus risus id convallis fringilla. Duis sit amet enim felis. "
        }
    ];


    return (
        <>
            <h1>Projects</h1>
            <div className="flex flex-wrap justify-around">
                {projectData.map((project, index) => {
                    return <CardDemo key={index} img={project.img} title={project.title} description={project.description} />
                })}
            </div>

        </>
    )
}