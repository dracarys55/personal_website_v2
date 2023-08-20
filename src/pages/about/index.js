import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, worktimeline, skills } from '../../content_option';
import { dataMylife } from '../../content_option';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <HelmetProvider>
      <Container className='About-section'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> About | {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'>{t("aboutPage.title")}</h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>{t("aboutPage.aboutMe")}</h3>
          </Col>
          <Col lg='7' className='d-flex align-items-center'>
            <div >
              <p >{t("aboutPage.aboutMeContent")}</p>
            </div>
          </Col>
        </Row>
        <Row className=' sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>{t("aboutPage.workTimeline")}</h3>
          </Col>
          <Col lg='7'>
            <table className='table caption-top'>
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope='row'>{t(`aboutPage.${data.jobtitle}`)}</th>
                      <td>{t(`aboutPage.${data.where}`)}</td>
                      <td>{t(`aboutPage.${data.date}`)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg='5'>
            <h3 className='color_sec py-4'>{t("aboutPage.skills")}</h3>
          </Col>
          <Col lg='7'>
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className='progress-title'>{data.name}</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className='progress-value'>{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className='mb-5 mt-3'>
          <Col lg='8'>
            <h2 className='display-4 mb-4'>{t("aboutPage.moreAboutMe")}</h2>
          </Col>
        </Row>
        <div className='sec_sp small_pic_ho'>
          {dataMylife.map((pic, i) => {
            return (
              <div key={i} className='small_pic'>
                <img src={pic.img} alt='/' />
                <div className='content'>
                  <p>{t(`aboutPage.${pic.desctiption}`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
