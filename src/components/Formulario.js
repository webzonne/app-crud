import React from 'react'
import LoadingTwo from '../components/LoadingTwo'

export default function Formulario({ isLoadingTwo, previewX, previewE, imagenExamen, guardarDisabledE, guardarDisabledX, imagenX, guardar, handlechange, handleFileChangeRayosX, handleFileChangeExamen, handleClick, checked, pacient }) {

    return (
        <>
            <form onSubmit={guardar}>
                <div className='border w-8/12 mx-auto p-5 border-slate-400  flex-inline'>
                    {/* NOMBRES */}
                    <p>NOMBRES</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nombre' defaultValue={pacient.nombre} />
                    {/* APELLIDOS */}
                    <p>APELLIDOS</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='apellido' defaultValue={pacient.apellido} />
                    {/* CEDULA */}
                    <p>CEDULA DE INDENTIDAD</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='cedula' defaultValue={pacient.cedula} />
                    {/* EDAD */}
                    <p>EDAD</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='number' name='edad' defaultValue={pacient.edad} />
                    {/* SEXO */}
                    <p>SEXO</p>
                    {/* <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='sexo' defaultValue={pacient.sexo} /> */}
                    <select defaultValue={pacient.sexo} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="sexo" >
                        <option value="">Seleccione un sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                     {/* ESTADO CIVIL */}
                     <p>ESTADO CIVIL</p>
                    {/* <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='sexo' defaultValue={pacient.sexo} /> */}
                    <select defaultValue={pacient.sexo} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="estado" >
                        <option value="">Seleccione un estado</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                    </select>
                     {/* NACIONALIDAD */}
                     <p>NACIONALIDAD</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nacionalidad' defaultValue={pacient.nacionalidad} />
                    {/* LUGAR DONDE VIVE */}
                    <p>LUGAR DONDE VIVE</p>
                    <select defaultValue={pacient.lugar} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="lugar" >
                        <option value="">Seleccione el lugar</option>
                        <option value="Casa">Casa</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Otro">Otro</option>
                    </select>
                    {/* USA ESCALERAS */}
                    <p>USA ESCALERAS DIARIAMENTE</p><br/>
                    
                    <input className='mr-2' type='radio' name='escalera' value='si'/>
                    <label>SI</label><br/>
                    {/* Numero de escalones */}
                    <p>Numero de escalones</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='number' name='escalones' defaultValue={pacient.escalones} />
                    <input className='mr-2' type='radio' name='escalera' value='no'/>
                    <label>NO</label><br/><br/>
                    {/* PROFESION O TRABAJO */}
                    <p>PROFESION O TRABAJO</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='ocupacion' defaultValue={pacient.ocupacion} />
                    {/* FECHA DE HISTORIA CLINICA */}
                    <p>FECHA DE HISTORIA CLINICA</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaclinica' defaultValue={pacient.fechaclinica} />
                    {/* ENFERMEDAD ACTUAL */}
                    <p>ENFERMEDAD ACTUAL</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    {/* ANTECEDENTES */}
                    <p>ANTECEDENTES PERSONALES PATOLOGICOS:</p><br />
                    <input onChange={handlechange} onClick={handleClick} type="checkbox" name="1hta" value="1HTA" checked={pacient.antecedentes.hta} />
                    <label htmlFor="diabetes">1HTA</label><br />
                    <input onChange={handlechange} type="checkbox" name="2DM" value="2DM" checked={pacient.antecedentes.DM} />
                    <label htmlFor="hipertencion">DM</label><br />
                    <input onChange={handlechange} type="checkbox" name="ef" value="enfermedad de la infancia" checked={pacient.antecedentes.ef} />
                    <label htmlFor="artritis">ENFERMEDAD DE LA INFANCIA</label><br />

                    <input onChange={handlechange} type="checkbox" name="ETS" value="enfermedad de transmicion sexual" checked={pacient.antecedentes.ets} />
                    <label htmlFor="PSORIASIS">ENFERMEDAD DE TRANSMISION SEXUAL</label><br />

                    <input onChange={handlechange} type="checkbox" name="CARDIOPATIA" value="CARDIOPATIA" checked={pacient.antecedentes.cardiopatia} />
                    <label htmlFor="LUPUS">CARDIOPATIA</label><br />

                    <input onChange={handlechange} type="checkbox" name="NEFROPATIAS" value="NEFROPATIAS" checked={pacient.antecedentes.nefropatias} />
                    <label htmlFor="ANEMIA DREPANOCITICA">NEFROPATIAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="neuropatia" value="neuropatia" checked={pacient.antecedentes.neuropatia} />
                    <label htmlFor="PERTHER">NEUROPATIA</label><br />

                    <input onChange={handlechange} type="checkbox" name="tuberculosis" value="tuberculosis" checked={pacient.antecedentes.tuberculosis} />
                    <label htmlFor="PERTHER">TUBERCULOSIS</label><br />

                    <input onChange={handlechange} type="checkbox" name="neoplasicas" value="neoplasicas" checked={pacient.antecedentes.neoplasicas} />
                    <label htmlFor="PERTHER">NEOPLASICAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="enfermedadesEndocrinas" value="enfermedades endocrinas" checked={pacient.antecedentes.eendocrinas} />
                    <label htmlFor="PERTHER">ENFERMEDADES ENDOCRINAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="alergias" value="alergias" checked={pacient.antecedentes.alergias} />
                    <label htmlFor="PERTHER">ALERGIAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="fracturas" value="fracturas" checked={pacient.antecedentes.fracturas} />
                    <label htmlFor="PERTHER">FRACTURAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">QUEMADURAS</label><br />

                    <input onChange={handlechange} type="checkbox" name="cirugiaPrevia" value="cirugiaPrevia" checked={pacient.antecedentes.cp} />
                    <label htmlFor="PERTHER">CIRUGIA PREVIA</label><br/><br/><br/><br/>
                    <p>HABITOS PSICOBIOLOGICOS:</p><br />
                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">DEPORTES</label><br />
                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">CAFE</label><br />
                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">TABAQUICOS</label><br />
                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">ALCOHOL</label><br />
                    <input onChange={handlechange} type="checkbox" name="quemaduras" value="quemaduras" checked={pacient.antecedentes.quemaduras} />
                    <label htmlFor="PERTHER">DROGAS ILICITAS</label><br /><br/><br/><br/>
                    {/* DIAGNOSTICO PRE-OPERATORIO */}
                    {/* <p>DIAGNOSTICO PRE-OPERATORIO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='diagnostico' defaultValue={pacient.diagnostico}></textarea> */}
                    {/* DIAGNOSTICO POST-OPERATORIO */}
                    {/* <p>DIAGNOSTICO POST-OPERATORIO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='diagnosticoPost' defaultValue={pacient.diagnosticoPost}></textarea> */}


                    {/* EXAMEN FISICO */}
                    <p>EXAMEN FISICO:</p><br/>
                    <p>PRESION ARTERIAL</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>TEMPERATURA</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>FRECUENCIA RESPIRATORIA</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>PULSO</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>TALLA</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>PESO</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>IMC</p>
                    <input onChange={handlechange} className='w-1/4 py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='presionArterial' defaultValue={pacient.presionArterial} />
                    <p>PIEL</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>GANGLIOS</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>CABEZA</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>CUELLO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>TORAX</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>ABDOMEN</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>GENITALES</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>
                    <p>SISTEMA NERVIOSO</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='enfermedad' defaultValue={pacient.enfermedad}></textarea>

                    {/* FUERZA MUSCULAR */}
                    <p>FUERZA MUSCULAR</p>
                    <table className='w-full my-7 table'>
                        <thead>
                            <tr>
                                <th>CASO</th>
                                <th>1-5</th>
                                <th>2-5</th>
                                <th>3-5</th>
                                <th>4-5</th>
                                <th>5-5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* PRE OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>PRE-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="1-5" checked={pacient.preOperatorioRadio === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="2-5" checked={pacient.preOperatorioRadio === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="3-5" checked={pacient.preOperatorioRadio === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="4-5" checked={pacient.preOperatorioRadio === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="preOperatorioRadio" value="5-5" checked={pacient.preOperatorioRadio === "5-5"} /></td>
                            </tr>
                            {/* POST OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="1-5" checked={pacient.postOperatorioRadio === '1-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="2-5" checked={pacient.postOperatorioRadio === '2-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="3-5" checked={pacient.postOperatorioRadio === '3-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="4-5" checked={pacient.postOperatorioRadio === '4-5'} /></td>
                                <td><input type="radio" onChange={handlechange} name="postOperatorioRadio" value="5-5" checked={pacient.postOperatorioRadio === '5-5'} /></td>
                            </tr>
                            {/* 15 DIAS POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>15 DIAS POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="1-5" checked={pacient.quinceDias === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="2-5" checked={pacient.quinceDias === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="3-5" checked={pacient.quinceDias === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="4-5" checked={pacient.quinceDias === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="quinceDias" value="5-5" checked={pacient.quinceDias === "5-5"} /></td>
                            </tr>
                            {/* 1 MES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>1 MES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="1-5" checked={pacient.UnMes === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="2-5" checked={pacient.UnMes === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="3-5" checked={pacient.UnMes === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="4-5" checked={pacient.UnMes === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="UnMes" value="5-5" checked={pacient.UnMes === "5-5"} /></td>
                            </tr>
                            {/* 2 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>2 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="1-5" checked={pacient.DosMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="2-5" checked={pacient.DosMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="3-5" checked={pacient.DosMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="4-5" checked={pacient.DosMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="DosMeses" value="5-5" checked={pacient.DosMeses === "5-5"} /></td>
                            </tr>
                            {/* 3 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>3 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="1-5" checked={pacient.TresMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="2-5" checked={pacient.TresMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="3-5" checked={pacient.TresMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="4-5" checked={pacient.TresMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="TresMeses" value="5-5" checked={pacient.TresMeses === "5-5"} /></td>

                            </tr>
                            {/* 4 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>4 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="1-5" checked={pacient.CuatroMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="2-5" checked={pacient.CuatroMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="3-5" checked={pacient.CuatroMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="4-5" checked={pacient.CuatroMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CuatroMeses" value="5-5" checked={pacient.CuatroMeses === "5-5"} /></td>

                            </tr>
                            {/* 5 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>5 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="1-5" checked={pacient.CincoMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="2-5" checked={pacient.CincoMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="3-5" checked={pacient.CincoMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="4-5" checked={pacient.CincoMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="CincoMeses" value="5-5" checked={pacient.CincoMeses === "5-5"} /></td>

                            </tr>
                            {/* 6 MESES POST-OPERATORIO */}
                            <tr>
                                <td className='text-xs md:text-base text-gray-600'>6 MESES  POST-OPERATORIO</td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="1-5" checked={pacient.SeisMeses === "1-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="2-5" checked={pacient.SeisMeses === "2-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="3-5" checked={pacient.SeisMeses === "3-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="4-5" checked={pacient.SeisMeses === "4-5"} /></td>
                                <td><input type="radio" onChange={handlechange} name="SeisMeses" value="5-5" checked={pacient.SeisMeses === "5-5"} /></td>

                            </tr>
                        </tbody>
                    </table>

                    {/* PLAN */}
                    {/* <p>PLAN</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='plan' defaultValue={pacient.plan}></textarea> */}
                    {/* PENDIENTE */}
                    {/* <p>PENDIENTE</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='4' type='text' name='pendiente' defaultValue={pacient.pendiente}></textarea> */}
                    {/* TIPO DE ABORDAJE */}
                    {/* <p>TIPO DE ABORDAJE</p>
                    <select defaultValue={pacient.abordaje} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="abordaje" >
                        <option value="">Seleccione tipo de abordaje</option>
                        <option value="Anterior">Anterior</option>
                        <option value="Lateral">Lateral</option>
                        <option value="Posterior">Posterior</option>
                        <option value="otras">otras</option>
                    </select> */}
                    {/* DONDE FUE EVALUADO */}
                    {/* <p>DONDE FUE EVALUADO</p>
                    <select defaultValue={pacient.evaluado} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="evaluado" >
                        <option value="">Seleccione el lugar</option>
                        <option value="IVSS Hospital Domingo Luciani">IVSS Hospital Domingo Luciani</option>
                        <option value="IVSS Dr Jose Maria Vargas">IVSS Dr Jose Maria Vargas</option>
                    </select> */}
                    
                    {/* LUGAR DE INTERVENCION */}
                    <p>LUGAR DE INTERVENCION:</p><br/>
                    <input className='mr-2' type='radio' name='escalera' value='publico'/>
                    <label>PUBLICO</label><br/>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='escalones' defaultValue={pacient.escalones} />
                    <input className='mr-2' type='radio' name='escalera' value='privado'/>
                    <label>PRIVADO</label><br/>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='escalones' defaultValue={pacient.escalones} />
                   

                    {/* FECHA DE POSIBLE CIRUGIA */}
                    {/* <p>FECHA DE POSIBLE CIRUGIA</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaCirugia' defaultValue={pacient.fechaCirugia} /> */}
                    {/* LUGAR DE OPERACION */}
                    {/* <p>LUGAR DE OPERACION</p>
                    <select defaultValue={pacient.operacion} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="operacion" >
                        <option value="">Seleccione el lugar</option>
                        <option value="IVSS Hospital Domingo Luciani">IVSS Hospital Domingo Luciani</option>
                        <option value="IVSS Dr Jose Maria Vargas">IVSS Dr Jose Maria Vargas</option>
                    </select> */}
                    {/* FECHA DE OPERACION */}
                    {/* <p>FECHA DE OPERACION</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='date' name='fechaOperacion' defaultValue={pacient.fechaOperacion} /> */}
                    {/* PROCEDENCIA DE PROTESIS */}
                    {/* <p>PROCEDENCIA DE PROTESIS</p>
                    <select defaultValue={pacient.protesis} onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name="protesis" >
                        <option value="">Seleccione Procedencia</option>
                        <option value="PROTESIS MEHECO">PROTESIS MEHECO</option>
                        <option value="PROTESIS CASA COMERCIAL">PROTESIS CASA COMERCIAL</option>
                    </select> */}
                    {/* RAYOS X */}
                    {/* <p>SUBIR IMAGEN RAYOS X</p>
                    <div className='my-7'> */}
                        {/* <FileBase type='file' multiple={false} onDone={handleFileChangeRayosX} /> */}
                        {/* <input type='file' name='rayosx' onChange={handleFileChangeRayosX}/><br/><br/>
                        {previewX ? <img src={previewX} width={150} height={150} alt='Preview' />:imagenX ? <p>Cargando...</p>:null}
                    </div> */}
                     {/* EXAMEN */}
                     {/* <p>SUBIR EXAMEN</p>
                    <div className='my-7'> */}
                        {/* <FileBase type='file' multiple={false} onDone={handleFileChangeExamen} /> */}
                        {/* <input type='file' name='examen' onChange={handleFileChangeExamen}/><br/><br/>
                        {previewE ? <img src={previewE} width={150} height={150} alt='Preview' />:imagenExamen ? <p>Cargando...</p>:null}
                    </div> */}
                    <div className='flex items-center'>
                        <button className={`bg-green-700 py-3 px-5 mr-5 rounded-lg text-slate-50 ${guardarDisabledX || guardarDisabledE ? 'disabled':''} `}  disabled={guardarDisabledX || guardarDisabledE}>Guardar</button>
                        {isLoadingTwo ? <LoadingTwo /> : null}
                    </div>
                </div>
            </form>
        </>
    )
}
