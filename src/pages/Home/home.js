import "./home.css";
import React from 'react';
import {Purpose} from "./TextConstants/PurposePET"
import { AboutPET } from "./TextConstants/AboutPETtext";
import Info from "./SubComponentes/Home_Infos/Infos.js";
import Button from "./SubComponentes/Home_button/Button";
import useIsMobile from "../../hooks/window/useIsMobile";
import ScrollArrow from "./SubComponentes/ScrollArrow/ScrollArrow";
import Reveal from "../../components/interactive/Efeito Reveal/Reveal";
import useScrollToSection from "../../hooks/window/useScrollToSection";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import HeaderConteiner from "./SubComponentes/Header_conteiner/HeaderConteiner";


export default function Home() {
    
    const isMobile = useIsMobile();  
    
    const { showArrow: showArrow1, sectionRef: sectionRef1, 
        scrollToSection: scrollToSection1 } = useScrollToSection('section1');
    
    const { showArrow: showArrow2, sectionRef: sectionRef2, 
        scrollToSection: scrollToSection2 } = useScrollToSection('section2');


    return (
        <div className="home">
            <MenuNavegacao></MenuNavegacao>
            
            <HeaderConteiner/>
     
            <ScrollArrow
                showArrow={showArrow1}
                scrollToSection={scrollToSection1}
                customClass1={'scroll-arrow'}
                customClass2={'home-arrow'}
            />
            <div className ='scrolltoView' id='section1' ref={sectionRef1}>
                <Reveal>
                    <Info
                        title="Sobre o PET"
                        content={isMobile ? AboutPET.mobile : AboutPET.desktop } 
                    />
                    <Button
                        value="Processo Seletivo"
                        to='/processo-seletivo'
                    />
                </Reveal>
            </div>

            <ScrollArrow
                
                showArrow={showArrow2}
                scrollToSection={scrollToSection2}
                customClass1={'scroll-arrow2'}
                customClass2={'home-arrow'}
           
           />

            <div className ='scrolltoView' id='section2' ref={sectionRef2}>
            <Reveal>
                <Info
                    title="Propósito"
                    content={ isMobile? Purpose.mobile: Purpose.desktop}>
                </Info>

                <Button
                    value="Conheça os Projetos"
                    to='/projetos'
                />

            </Reveal>
            </div>
        </div>
    );
}
