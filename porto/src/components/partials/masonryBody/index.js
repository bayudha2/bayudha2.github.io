import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ToastContainer, toast } from 'react-toastify';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import 'react-toastify/dist/ReactToastify.css';

export const MasonryLayout = (props) => {
    const notifyEmail = () => toast.error('bayudha.bd@gmail.com');
    const notifyWhatsapp = () => toast.success('082222217661');

    const aboutRefContainer = useRef(null);
    const expeRefContainer = useRef(null);
    const portoRefContainer = useRef(null);
    const skillRefContainer = useRef(null);
    const toolsRefContainer = useRef(null);

    useEffect(() => {
        function hiddenHidden() {
            console.log(props.toChild);
            if (props.toChild.about === 1) {
                aboutRefContainer.current.classList.remove('hidden');

                setTimeout(() => {
                    aboutRefContainer.current.classList.add('hidden');
                }, 5000);
            }
            if (props.toChild.expe === 1) {
                expeRefContainer.current.classList.remove('hidden');

                setTimeout(() => {
                    expeRefContainer.current.classList.add('hidden');
                }, 5000);
            }
            if (props.toChild.skill === 1) {
                skillRefContainer.current.classList.remove('hidden');

                setTimeout(() => {
                    skillRefContainer.current.classList.add('hidden');
                }, 5000);
            }
            if (props.toChild.porto === 1) {
                portoRefContainer.current.classList.remove('hidden');

                setTimeout(() => {
                    portoRefContainer.current.classList.add('hidden');
                }, 5000);
            }
            if (props.toChild.tools === 1) {
                toolsRefContainer.current.classList.remove('hidden');

                setTimeout(() => {
                    toolsRefContainer.current.classList.add('hidden');
                }, 5000);
            }
        }
        hiddenHidden();
    });

    const pathSvgArrow =
        'M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711Z';

    return (
        <div className="px-2 pb-3">
            <ToastContainer />
            <div className="lg:flex">
                <div className="relative">
                    <div
                        className="absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden"
                        ref={portoRefContainer}
                    >
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            className=" my-auto text-blue-500"
                            size="2x"
                        />
                    </div>
                    <Splide
                        options={{
                            width: 700,
                            pagination: false,
                            arrowPath: pathSvgArrow,
                            autoplay: true,
                            pauseOnHover: true,
                            resetProgress: false,
                            type: 'loop',
                            interval: 4000,
                            classes: {},
                        }}
                    >
                        <SplideSlide>
                            <div
                                className="bg-white p-8"
                                style={{ height: 648 }}
                            >
                                <div className="flex justify-center items-center">
                                    <a
                                        href="https://hudson-parliament-66791.herokuapp.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="p-6 bg-gray-200 rounded-lg">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/img/restaurant.png`}
                                                alt="web1"
                                                style={{
                                                    height: 250,
                                                    width: 400,
                                                }}
                                                className="filter drop-shadow-lg"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <h1 className="text-center font-bold text-xl pt-7">
                                    Restaurant App
                                </h1>
                                <div className="flex justify-center items-center pt-3">
                                    <p className=" text-center font-light text-sm w-96">
                                        Web App to Help people choose restaurant
                                        they like, the app provide variety of
                                        restaurant with difference kind of food.
                                        App using save feature to save
                                        restaurant user like to save and keep it
                                        on Favorite
                                    </p>
                                </div>
                                <div className="flex justify-center items-center mt-14">
                                    <p className="text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ">
                                        Tech
                                    </p>
                                </div>
                                <div className="flex justify-center items-center pt-5">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/heroku.png`}
                                        alt="tech"
                                        style={{ height: 32, width: 'auto' }}
                                        className="pr-4"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/nodejs.png`}
                                        alt="tech"
                                        style={{ height: 32, width: 'auto' }}
                                        className="pr-4"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/sass.png`}
                                        alt="tech"
                                        style={{ height: 32, width: 'auto' }}
                                        className="pr-4"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/webpack.png`}
                                        alt="tech"
                                        style={{ height: 32, width: 'auto' }}
                                        className="pr-4"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div
                                className="bg-white p-8"
                                style={{ height: 648 }}
                            >
                                <div className="flex justify-center items-center">
                                    <a
                                        href="https://soccerbase-6c52f.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="p-6 bg-gray-200 rounded-lg">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/img/soccer.png`}
                                                alt="web1"
                                                style={{
                                                    height: 250,
                                                    width: 400,
                                                }}
                                                className="filter drop-shadow-lg"
                                            />
                                        </div>
                                    </a>
                                </div>

                                <h1 className="text-center font-bold text-xl pt-7">
                                    Soccerbase App
                                </h1>
                                <div className="flex justify-center items-center pt-3">
                                    <p className=" text-center font-light text-sm w-96">
                                        Web App to help people keep update with
                                        soccer league around the world. This app
                                        provides updated information of teams,
                                        matches, score from different leagure
                                        such as UEFA league, Premier league, La
                                        league.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center mt-14">
                                    <p className="text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ">
                                        Tech
                                    </p>
                                </div>
                                <div className="flex justify-center items-center pt-5">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/materialize.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/workbox.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/firebase.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div
                                className="bg-white p-8"
                                style={{ height: 648 }}
                            >
                                <div className="flex justify-center items-center">
                                    <a
                                        href="https://staycationby.herokuapp.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="p-6 bg-gray-200 rounded-lg">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/img/staycation.png`}
                                                alt="web1"
                                                style={{
                                                    height: 250,
                                                    width: 400,
                                                }}
                                                className="filter drop-shadow-lg"
                                            />
                                        </div>
                                    </a>
                                </div>

                                <h1 className="text-center font-bold text-xl pt-7">
                                    Traveling App
                                </h1>
                                <div className="flex justify-center items-center pt-3">
                                    <p className=" text-center font-light text-sm w-96">
                                        Web App to help people find destination
                                        for Traveling, Staycation let user see
                                        what is the best and suitable place for
                                        user to enjoy their holiday with
                                        traveling. staycation provide hotel and
                                        villa for user to choose which are
                                        located ner ther destination user want
                                        to travel.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center mt-10">
                                    <p className="text-center font-bold text-sm text-white bg-gray-900 px-2 py-1 rounded-lg ">
                                        Tech
                                    </p>
                                </div>
                                <div className="flex justify-center items-center pt-5">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/bootstrap.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/sass.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/react.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/heroku.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/img/nodejs.png`}
                                        alt="tech"
                                        style={{ height: 35, width: 'auto' }}
                                        className="pr-6"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="flex flex-col">
                    <div className="relative mt-2 lg:mt-0">
                        <div
                            className="absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden"
                            ref={aboutRefContainer}
                        >
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                className=" my-auto text-yellow-500"
                                size="2x"
                            />
                        </div>
                        <Splide
                            options={{
                                pagination: false,
                                arrowPath: pathSvgArrow,
                                width: 474,
                            }}
                            className="ml-2 mb-2"
                        >
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-3xl">
                                            About me
                                        </h1>
                                        <p className="pt-4 font-light text-sm">
                                            Hi, I'm Alif Prasetyo Bayu Aji.
                                            Fresh Graduate of Computer Science
                                            major at Telkom University. During
                                            my studies, I have been involved in
                                            various projects such as UI design,
                                            website and software development.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div
                                    className="bg-white h-80 p-16"
                                    style={{
                                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fotoku.jpeg)`,
                                        backgroundSize: '100% 100%',
                                    }}
                                />
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden"
                            ref={expeRefContainer}
                        >
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                className=" my-auto text-red-500"
                                size="2x"
                            />
                        </div>
                        <Splide
                            options={{
                                pagination: false,
                                arrowPath: pathSvgArrow,
                                width: 474,
                            }}
                            className="ml-2"
                        >
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-3xl">
                                            Experiences
                                        </h1>
                                        <p className="pt-4 font-light text-sm">
                                            I have participated in various
                                            activities during my studies on
                                            college.
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/secu.png`}
                                            alt="intern"
                                            style={{
                                                height: 90,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold text-center text-lg">
                                            Laboratory assistant
                                        </h1>
                                        <p className="text-center text-sm font-light text-gray-400">
                                            Seculab Laboratory
                                        </p>
                                        <p className="text-center text-sm font-light text-gray-400">
                                            2019 - 2020
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/disjabar.png`}
                                            alt="intern"
                                            style={{
                                                height: 90,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold text-center text-lg">
                                            Informatics division intern
                                        </h1>
                                        <p className="text-center text-sm font-light text-gray-400">
                                            Diskominfo Jawa Barat
                                        </p>
                                        <p className="text-center text-sm font-light text-gray-400">
                                            2019
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="relative mt-2 lg:mt-0">
                        <div
                            className="absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden"
                            ref={skillRefContainer}
                        >
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                className=" my-auto text-green-500"
                                size="2x"
                            />
                        </div>
                        <Splide
                            options={{
                                width: 474,
                                pagination: false,
                                arrowPath: pathSvgArrow,
                            }}
                            className="ml-2 mb-2"
                        >
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-3xl">
                                            Skills
                                        </h1>
                                        <p className="pt-4 font-light text-sm">
                                            Here are list of skill i have until
                                            now
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-xl mb-4">
                                            Programming language
                                        </h1>
                                        <div className="flex">
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/js.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/python.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-center text-xl mb-4">
                                            Front end
                                        </h1>
                                        <div className="flex">
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/nodejs.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 40,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/react.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex pt-2">
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/materialize.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/bootstrap.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 40,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-8">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/tailwind.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-center text-xl mb-4">
                                            Back end
                                        </h1>
                                        <div className="flex">
                                            <div className="flex-1 ml-2">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/nodejs.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 40,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-2">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/hapi.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-2">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/express.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 40,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex pt-3">
                                            <div className="flex-1 ml-4">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/mongo.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1 ml-4">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/assets/img/postgre.png`}
                                                    alt="language"
                                                    style={{
                                                        height: 50,
                                                        width: 'auto',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute top-0 right-0 z-30 pr-4 pt-6 animate-bounce hidden"
                            ref={toolsRefContainer}
                        >
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                className=" my-auto text-purple-500"
                                size="2x"
                            />
                        </div>
                        <Splide
                            options={{
                                pagination: false,
                                arrowPath: pathSvgArrow,
                                width: 474,
                            }}
                            className="ml-2"
                        >
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <h1 className="font-bold text-center text-3xl">
                                            Tools
                                        </h1>
                                        <p className="pt-4 font-light text-center text-sm">
                                            These are my favorite tools that i'm
                                            using
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/vscode.png`}
                                            alt="tools"
                                            style={{
                                                height: 100,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold pt-6 text-center text-xl text-gray-900">
                                            Visual Studio Code
                                        </h1>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/figma.png`}
                                            alt="tools"
                                            style={{
                                                height: 100,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold pt-6 text-center text-xl text-gray-900">
                                            Figma
                                        </h1>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/postman.png`}
                                            alt="tools"
                                            style={{
                                                height: 100,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold pt-6 text-center text-xl text-gray-900">
                                            Postman
                                        </h1>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="bg-white h-80 p-16 flex justify-center items-center">
                                    <div>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/term.png`}
                                            alt="tools"
                                            style={{
                                                height: 100,
                                                width: 'auto',
                                            }}
                                            className="mx-auto"
                                        />
                                        <h1 className="font-bold pt-6 text-center text-xl text-gray-900">
                                            Terminal
                                        </h1>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
            <div className=" lg:flex">
                <div
                    className="bg-white mt-2"
                    style={{
                        width: 700,
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg_gif.gif)`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="bg-gray-800 white mt-2 ml-2 flex-grow h-44 lg:flex">
                    <div
                        className="lg:flex-1 bg-white flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bgppl.png)`,
                            backgroundSize: '100% 100%',
                        }}
                    >
                        <div>
                            <h2 className="text-white text-2xl font-bold">
                                Hello people
                            </h2>
                            <p className="text-white text-base font-light pt-2">
                                I would be very happy to be a part of your
                                journey and reach the goals together.
                                <br />
                                Here i provide various way to contact me. {'>'}
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-gray-800 lg:flex-col justify-between mt-2 lg:mt-0 lg:ml-2">
                        <div className="flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                            <img
                                onClick={notifyEmail}
                                src={`${process.env.PUBLIC_URL}/assets/img/gmail.png`}
                                alt="mail"
                                style={{ height: 40, width: 'auto' }}
                                className="bg-white p-1 rounded-sm"
                            />
                        </div>
                        <div className="flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                            <img
                                onClick={notifyWhatsapp}
                                src={`${process.env.PUBLIC_URL}/assets/img/whatsapp.png`}
                                alt="wa"
                                style={{ height: 40, width: 'auto' }}
                                className="bg-white p-1 rounded-sm"
                            />
                        </div>
                        <div className="flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                            <a
                                href="https://www.linkedin.com/in/alif-prasetyo-bayu-aji-122426197/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/linkedin.png`}
                                    alt="linkedin"
                                    style={{ height: 40, width: 'auto' }}
                                    className="bg-white p-1 rounded-sm"
                                />
                            </a>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                            <a
                                href="https://github.com/bayudha2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/github.png`}
                                    alt="github"
                                    style={{ height: 35, width: 'auto' }}
                                    className="bg-white p-1 rounded-sm"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasonryLayout;
