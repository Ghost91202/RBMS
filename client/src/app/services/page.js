import Navbar from "@/components/navbar/mainnav"
import Footer from "@/components/footer/footer"
import Banner from "../../components/assets/Banner/banner2"
import Section1 from "../../components/SECTION/section1"
import Section2 from "../../components/SECTION/section2"
import Section3 from "../../components/SECTION/section3"
import Section4 from "../../components/SECTION/section4"
import img from "../../assets/bnner.avif"
export default function services( params ) {
    return (
        <div>
            <Navbar />
            <Banner heading="Tailored Digital Marketing Services In uttarpradesh  For Business Growth"
                desc="Rahil Business Multiple Solution is a data-driven digital marketing agency in uttarpradesh. Our customized campaigns deliver measurable results, free of jargon. We pride ourselves on professionalism and excellence."
                img={img}
            />
            <Section1/>
            <Section4/>
            <Section2/>
            <Section3 />
            <Footer />
        </div>
    )
}
