import React, { Component } from 'react'
import './App.css'
import {
    Dropdown,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

import Home_bkgimg from './img/home_bkg.jpg'
import Markets_bkgimg from './img/markets_bkg.jpg'
import Logo_img from './img/logo.png'
import Technologies_img_01 from './img/2-1.png'
import Technologies_img_02 from './img/2-2.png'
import Technologies_img_03 from './img/2-3.png'
import Markets_img_01 from './img/3-1.png'
import Markets_img_02 from './img/3-2.png'
import Markets_img_03 from './img/3-3.png'
import Markets_img_04 from './img/3-4.png'
import Markets_img_05 from './img/3-5.png'
import Markets_img_06 from './img/3-6.png'
import AboutUS_img_01 from './img/4-1.png'

export default class HomepageLayout extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state

        return (
            <div>
                <Menu fixed='top' inverted stackable>
                    <Container>
                       
                        <Menu.Item as='a' active position='right'>Home</Menu.Item>
                        <Menu.Item as='a' >TECHNOLOGIES</Menu.Item>
                        <Menu.Item as='a'>MARKETS</Menu.Item>
                        <Menu.Item as='a'>ABOUT US</Menu.Item>
                        <Menu.Item as='a'>CONTACT</Menu.Item>
                    </Container>
                </Menu>

                <div className='Home' style={{background: `url(${Home_bkgimg}) center`}}>
                    <div className='Home-slogan-div'>
                        <h1 className='Home-slogan'>Eye Tracking Made Easy</h1>
                    </div>
                </div>

                <div className='Technologies center'>
                    <div className='Technologies-title'>
                        <h1>TECHNOLOGIES</h1>
                        <p>Our novel calibration approach,data fusion algorithms make eye tracking system used in dynamic,unconstrained,real-word scenarios.</p>
                    </div>
                    <div className='Technologies-grid'>
                        <Grid centered columns={4} stackable>
                            <Grid.Column>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Image style={{ display: 'inline-block' }} src={Technologies_img_01}></Image>
                                        <p>Innovative Calibration Workflow</p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Image style={{ display: 'inline-block' }} src={Technologies_img_02}></Image>
                                        <p>Advanced Data Fusion Algorithms</p>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Image style={{ display: 'inline-block' }} src={Technologies_img_03}></Image>
                                        <p>Wearable, Portable and Configurable</p>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div >


                <div className='Markets center' style={{background: `url(${Markets_bkgimg}) center`}}>
                    <h1>MARKETS</h1>
                    <div>
                        <Grid stackable>
                            <Grid.Row centered columns={4} >
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_01}></Image>
                                            </div>
                                            <p>AI</p>
                                        </div>

                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_02}></Image>
                                            </div>
                                            <p>Training</p>
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_03}></Image>
                                            </div>
                                            <p>Object recognizing</p>
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered columns={4}>
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_04}></Image>
                                            </div>
                                            <p>Entertainment</p>
                                        </div>

                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_05}></Image>
                                            </div>
                                            <p>Automotive</p>

                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline-block' }}>
                                            <div style={{ display: 'inline-block', width: '165px', height: '165px' }}>
                                                <Image src={Markets_img_06}></Image>
                                            </div>
                                            <p>Museum</p>
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>

                <div className='About center'>
                    <h1>ABOUT US</h1>
                    <Image src={AboutUS_img_01} style={{ display: 'inline-block', padding: '5px' }}></Image>
                </div>

                <div className='Contact' style={{ background: '#021234', margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Grid divided stackable centered>
                        <Grid.Row>
                            <Grid.Column width={6}>

                                <div style={{ textAlign: 'center' }}>
                                    <Image centered src={Logo_img} />
                                    <div style={{ display: 'inline-block', background: '#ffffff', width: '100px', height: '100px' }}></div>
                                    <p>2017 Vuelosophy. All rights reserved</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <div style={{ textAlign: 'center' }}>
                                    <h1>Contact Us</h1>
                                    <p>3 Floor,Tower A,Dinghao Building,Haidian District Beijing </p>
                                    <p>1172 Castro Street Mountain View,CA</p>
                                    <p>bnie@mac.com</p>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div >
        )
    }
}