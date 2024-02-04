import { useState, useCallback } from "react";
import StatCard from "../../Components/StatCard";
import Form from "../../Components/Form";

export default function MiddleContents(){
    const [shortLink, setShortLink] = useState({
        originalLink: "",
        shortLink: ''
    })
    const [copyText, setCopyText] = useState(false);
    const STAT_CARD_DATA = [
        {
            path: "/icon-brand-recognition.svg",
            subHeading: "Brand Recognition",
            content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        },
        {
            path: "/icon-detailed-records.svg",
            subHeading: "Detailed Records",
            content: "Gain insights on who is clicking your links. Knowing when and where people enggage with your content helps inform better decisions."
        },
        {
            path: "/icon-fully-customizable.svg",
            subHeading: "Fully Customizable",
            content: "Improve brand awareness and content discoverability through customizable links. Supercharging audience with engagement."
        }
    ];


    //Function to set data from the fetch request to state variable
    const setData = useCallback((data) => {
        setCopyText(false);
        setShortLink(() => {
            let tempLink = {...shortLink}
            tempLink.originalLink = data.long_url;
            tempLink.shortLink = data.link;
            return tempLink
        })
    }, [shortLink])

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(shortLink.shortLink)
        .then(() => {
            setCopyText(!copyText);
        })
        .catch(() => {
            alert("Copy Failed.");
        });
    }

    return(
        <section className="middle">

            <div className="middle__shorten | container">
                <Form setData={setData}/>
                {
                    shortLink.shortLink !== '' ? 
                    <div className="middle__shorten--link">
                        <p className="og-link">{shortLink.originalLink}</p>
                        <div className="middle__shorten--link-group">
                            <p>{shortLink.shortLink}</p>
                            <button type="button" onClick={copyTextToClipboard} className={copyText ? "copied" : ""} value={shortLink.shortLink}>{copyText ? "Copied!" : "Copy"}</button>
                        </div>
                    </div>
                    : null
                }
            </div>

            <div className="middle__stats | container">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

                <div className="middle__stats--cards">
                    {
                        STAT_CARD_DATA.map(card => {
                            return(
                                <StatCard 
                                    key={card.path}
                                    path={card.path}
                                    subHeading={card.subHeading}
                                    content={card.content}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}