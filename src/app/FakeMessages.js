import React, { Component } from 'react'

class FakeMessages extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: [
                        `
                        .message {
                            border: 2px solid #437fc1;
                            border-radius: 5px;
                            padding: 10px;
                            margin: 5px 0;
                            width: 50%;
                            float: left;
                        }
                        
                        /* Darker chat message */
                        .darker {
                            border-color: #437fc1;
                            background-color: #aec8e5;
                            float: right;
                            text-align: right;
                        }
                        
                        /* Clear floats */
                        .message::after {
                            content: "";
                            clear: both;
                            display: table;
                        }
                        
                        /* Style images */
                        .message img {
                            float: left;
                            max-width: 60px;
                            width: 100%;
                            margin-right: 20px;
                            border-radius: 50%;
                        }
                        
                        /* Style the right image */
                        .message img.right {
                            float: right;
                            margin-left: 20px;
                            margin-right:0;
                        }
                        
                        /* Style time text */
                        .time-right {
                            float: right;
                            color: #aaa;
                        }
                        
                        /* Style time text */
                        .time-left {
                            float: left;
                            color: #999;
                        }
                        .writer {
                            width: 100%;
                            position: fixed;
                            bottom: 20px;
                        }
                        .writer input {
                            width: 100%;
                            border: none;
                            border-top : 1px solid #ccc;
                        }
                        `
                    ].join('\n')
                }}>
                </style>
                <div className="message">
                    <img src="http://i.pravatar.cc/65?img=11" alt="Avatar" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <span className="time-right">11:00</span>
                </div>

                <div className="message darker">
                    <img src="http://i.pravatar.cc/65?img=8" alt="Avatar" className="right" />
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <span className="time-left">11:01</span>
                </div>

                <div className="message">
                    <img src="http://i.pravatar.cc/65?img=11" alt="Avatar" />
                    <p>Ut enim ad minim veniam quis nostrud </p>
                    <span className="time-right">11:02</span>
                </div>

                <div className="message darker">
                    <img src="http://i.pravatar.cc/65?img=8" alt="Avatar" className="right" />
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <span className="time-left">11:05</span>
                </div>

                <div className="writer">
                    <input type="text" placeholder="Write your Message" />
                </div>
            </div>
        )
    }
}

export default FakeMessages
