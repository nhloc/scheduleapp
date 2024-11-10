import React from 'react';
import style from './Home.module.css';

function Home() {
    return (
        <div>
            <div className={style.header}>               
            </div>
            <div className={style.header_app}>
                <div className={style.div_title}>
                    <label className={style.title_label}>My Schedule</label>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.section30}>
                    <div className={style.div_btn_create}>
                        <button className={style.btn_create}>
                            Create
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={style.section70}>

                </div>
            </div>
        </div>
    );
}

export default Home;
