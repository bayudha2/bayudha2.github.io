import React from 'react';
// import { useDispatch } from 'react-redux';
import Button from '../../elements/Button';
import IconText from '../../elements/IconText';
// import { setAbout } from './action';

export const LayoutHeader = (props) => {
    // const dispatch = useDispatch();

    const renderHeaderItem = () => {
        const counterAbout = 0;
        const counterExpe = 0;
        const counterSkill = 0;
        const counterPorto = 0;
        const counterTool = 0;
        return (
            <div className="flex w-9/12 mx-auto justify-between">
                <IconText />
                <div className="hidden lg:grid grid-cols-5 gap-6">
                    <Button
                        type="button"
                        className="text-white font-medium hover:text-yellow-500 "
                        onClick={() => {
                            props.sendToParent({ about: counterAbout + 1 });
                        }}
                    >
                        About
                    </Button>
                    <Button
                        type="button"
                        className="text-white font-medium hover:text-red-500"
                        onClick={() => {
                            props.sendToParent({ expe: counterExpe + 1 });
                        }}
                    >
                        Experiences
                    </Button>
                    <Button
                        type="button"
                        className="text-white font-medium hover:text-green-500"
                        onClick={() => {
                            props.sendToParent({ skill: counterSkill + 1 });
                        }}
                    >
                        Skills
                    </Button>
                    <Button
                        type="button"
                        className="text-white font-medium hover:text-blue-500"
                        onClick={() => {
                            props.sendToParent({ porto: counterPorto + 1 });
                        }}
                    >
                        Portofolio
                    </Button>
                    <Button
                        type="button"
                        className="text-white font-medium hover:text-purple-500"
                        onClick={() => {
                            props.sendToParent({ tools: counterTool + 1 });
                        }}
                    >
                        Tools
                    </Button>
                </div>
            </div>
        );
    };
    return (
        <header className="py-3 bg-black flex border-8 border-gray-800">
            {renderHeaderItem()}
        </header>
    );
};

export default LayoutHeader;
