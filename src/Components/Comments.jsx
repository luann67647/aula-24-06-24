// Comments.jsx

import React from 'react';
import styles from './comments.module.css'; // Importa os estilos do CSS module

export default function Comments() {
  const nome = 'Dr. Luann'; // Corrigido para "Dr. Luann"
  const profissao = 'Ecocardiografista';
  const telefone = '(32) 9985678-239653';
  const email = 'dr.luann6747@gmail.com';
  const endereco = 'São Paulo - SP';

  const formacaoAcademica = [
    {
      texto: 'Graduação em Medicina - Universidade X',
      icone: 'https://img.freepik.com/vetores-premium/simbolo-de-graduacao-de-educacao-de-icone-de-faculdade_883533-241.jpg',
    },
    {
      texto: 'Especialização em Cardiologia - Hospital Y',
      icone: 'https://st3.depositphotos.com/11410994/31992/v/450/depositphotos_319920740-stock-illustration-cross-red-hospital-medical-vector.jpg',
    },
    {
      texto: 'Mestrado em Cardiologia - Universidade Z',
      icone: 'https://static.vecteezy.com/ti/vetor-gratis/p1/19190086-de-contorno-de-cor-de-icone-de-mestrado-vetor.jpg',
    }
  ];

  const experienciaProfissional = [
    {
      texto: 'Ecocardiografista no Hospital ABC',
      icone: 'https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-sa%C3%BAde-logotipo-vetorial-do-hospital-cruz-vermelha-e-%C3%ADcone-cora%C3%A7%C3%A3o-%C3%A9-um-vetor-hospitalar-o-207057040.jpg',
    },
    {
      texto: 'Cardiologista Clínico no Hospital XYZ',
      icone: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5I4vFsskeDPJcJ-qXrA1_HBXc2IPJrUvPw&s',
    }
  ];

  const habilidades = [
    {
      texto: 'Ecocardiografia',
      icone: 'https://previews.123rf.com/images/maclife/maclife1703/maclife170300028/73211980-design-de-%C3%ADcone-de-logotipo-de-vetor-de-ecocardiograma.jpg',
    },
    {
      texto: 'Cardiologia Intervencionista',
      icone: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkL2zFlP4wsB5ySdFwLSafCCSwJCQJFggCnw&s',
    },
    {
      texto: 'Eletrocardiograma',
      icone: 'https://static.vecteezy.com/ti/vetor-gratis/p3/3743899-ecocardiograma-conceito-icone-vetor.jpg',
    },
    {
      texto: 'Gestão de Equipes Médicas',
      icone: 'https://img.freepik.com/vetores-gratis/coracao-do-molde-logo-hospital-shaped_1057-391.jpg',
    }
  ];

  const ultimoProjeto = {
    texto: 'Transformador e Inovador',
    icone: 'https://thumbs.dreamstime.com/z/%C3%ADcone-do-vetor-linear-de-grada%C3%A7%C3%A3o-inquisibilidade-ansioso-para-aprender-novas-informa%C3%A7%C3%B5es-disposto-saber-algo-novo-s%C3%ADmbolo-231073232.jpg',
    linkRepositorio: 'https://github.com/seu-usuario/repositorio-transformador'
  };

  const quemEhDrLuann = 'Dr. Luann é um renomado ecocardiografista com vasta experiência em diagnósticos cardíacos avançados e tratamentos inovadores.';

  const linkRepositorio = 'https://github.com/seu-usuario/repositorio';

  return (
    <div className={styles.comments}>
      <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/5275458-medico-consultor-medico-trabalhador-icone-gratis-vetor.jpg" alt="Imagem de perfil" />
      <div className={styles.commentsContent}>
        <header>
          <strong>{nome}</strong>
        </header>
        <p className={styles.profissao}>{profissao}</p>
        <p className={styles.endereco}>{endereco}</p>
        <div className={styles['contact-info']}>
          <p><strong>Telefone:</strong> {telefone}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Formação Acadêmica</h3>
          <ul>
            {formacaoAcademica.map((item, index) => (
              <li key={index}>
                <img src={item.icone} alt="Ícone" />
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3>Experiência Profissional</h3>
          <ul>
            {experienciaProfissional.map((item, index) => (
              <li key={index}>
                <img src={item.icone} alt="Ícone" />
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3>Habilidades</h3>
          <ul>
            {habilidades.map((item, index) => (
              <li key={index}>
                <img src={item.icone} alt="Ícone" />
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoBlock}>
          <h3>Último Projeto</h3>
          <img src={ultimoProjeto.icone} alt="Ícone" />
          <span>{ultimoProjeto.texto}</span>
          <a href={ultimoProjeto.linkRepositorio} target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className={styles.infoBlock}>
          <h3>Quem é Dr. Luann Batista </h3>
          <p>{quemEhDrLuann}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Link do Repositório</h3>
          <a href={linkRepositorio} target="_blank" rel="noopener noreferrer">Link para o Repositório</a>
        </div>
      </div>
    </div>
  );
}
