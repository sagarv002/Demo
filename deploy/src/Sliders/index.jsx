import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Style.css"

export default function Slider(url, limit = 5, page = 1) {



    const [images, setImages] = useState([]);
    const [cuurslide, setcurslide] = useState(0);
    const [erro, setErrormessage] = useState(null);
    const [loding, isLoding] = useState(false);



    async function featch_images(geyurl) {

        try {

            isLoding(true);


            const response = await fetch('${geyurl}?page=${page}&limit=${limit}');
            const data = await response


            if (data) {
                isLoding(false);

                setImages(data)
            }




        }


        catch (e) {
            isLoding(false);
            setErrormessage(e.message);
        };



    }

    useEffect(() => {
        if (url !== "")
            featch_images(url)

        {







        }

    }, [url]);



    if (loding) {

        return (<div> loding ... </div>);
    }
    else {

        if (erro !== null)

            return (<div>    Error Occurd   </div>);
    }

    return (<div className="Container">

        <BsArrowLeftCircleFill className="arrow-left" />
        {

            images && images.length ?

                images.map((images) => (

                    <img
                        key={images.id}
                        alt={images.dowanload_url}
                        src={images.dowanload_url}

                        className=" current images">


                    </img>




                )) : null}




        <BsArrowRightCircleFill className=" arrow right " />
        <span className="Circle indicators ">


            {

                images && images.length ?
                    images.map((_, index) =>
                        <button
                            key={index}
                            className=" current indicator "

                        ></button>


                    ) : null


            }
        </span>









    </div>);


}