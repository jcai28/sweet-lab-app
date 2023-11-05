import lab from "../../asset/lab.jpeg";
const About = () => {
    return (
    <div >
        <div id="about" className="p-12 grid grid-cols-1">
            <h2 >About us</h2>
            <br />
            <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                    beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
                    itaque error, atque, exercitationem fugit ab, modi ut voluptatum
                    sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
                    adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
                    eaque dignissimos ut, nam debitis numquam!
            </p>
        </div>
        <div className="flex items-center justify-center">
        <img src={lab} alt="" className="w-[800px] h-[300px] object-cover" />
        </div>
    </div>
    )
}
export default About;