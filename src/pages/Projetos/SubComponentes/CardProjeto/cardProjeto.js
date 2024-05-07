import "./cardProjeto.css";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaSearch, FaGraduationCap} from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdExtension, MdOutlineComputer } from "react-icons/md";
export default function CardProjeto(props) {

    const [isOpen, setIsOpen] = useState(false);
    function setingIsOpen() {
        setIsOpen(!isOpen);
    }


    return (
       <>
           {!isOpen && (
            <motion.div 
                className={isOpen ? "card aberto" : "card fechado"} 
                onClick={setingIsOpen}
            >

                <motion.div className="logoConteinerOpenned">
                    {props.tipo === 'ensino' && <FaGraduationCap className= 'logo-projeto'/>}
                    {props.tipo === 'pesquisa' && <FaSearch className= 'logo-projeto'/>}
                    {props.tipo === 'extensão' && <MdExtension className = 'logo-projeto'/>}
                    {props.tipo === 'extensão-desenvolivmento' && <MdOutlineComputer className = 'logo-projeto'/>}

                    <motion.a 
                        rel='noopener noreferrer' target="_blank" href={props.link}
                    >
                        <FaGithub className="Icon"/>
                    </motion.a>
                
                </motion.div>
                
                <motion.div >

                        <motion.h2 className="card-titulo">{props.titulo}</motion.h2>
                        <motion.p className="card-descricao">{props.descricao}</motion.p>
                        
                </motion.div>
            </motion.div>
                )}
                
            {isOpen && (
                <>
                    <div className="card_background" onClick={() => setIsOpen(!isOpen)}></div>
                    <motion.div 
                        className={isOpen ? "card aberto" : "card fechado"}
                    >
                        <motion.div className="logoConteinerClosed">
                            {props.tipo === 'ensino' && <FaGraduationCap className= 'logo-projeto'/>}
                            {props.tipo === 'pesquisa' && <FaSearch className= 'logo-projeto'/>}
                            {props.tipo === 'extensão' && <MdExtension className = 'logo-projeto'/>}
                            {props.tipo === 'extensão-desenvolivmento' && <MdOutlineComputer className = 'logo-projeto'/>}

                            <motion.a 
                                rel='noopener noreferrer' target="_blank" href={props.link}
                            >
                                <FaGithub className="icon-aberto"/>
                            </motion.a>
                        
                        </motion.div>
                        <AiFillCloseCircle className="closeButton" onClick={() => setIsOpen(!isOpen)}/>
                
                        <motion.div>
                            <motion.h2 className="card-titulo">{props.titulo} → {props.status}</motion.h2>
                            <motion.div  className="scrowSpace">
                                <p className='card--texto__expandido'>{props.expandido}</p>
                                <div className='card--texto__envolvidos'>
                                    <p className='card--texto__expandido'>{props.tecnologias} </p>
                                    <p className='card--texto__expandido'></p>
                                </div>
                            </motion.div>
                    
                        </motion.div>

                </motion.div>
           </>
            )}
            </>
    )
}
