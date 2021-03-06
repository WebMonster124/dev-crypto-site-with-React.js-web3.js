// IMPORT PACKAGE REFERENCES
import React from 'react';
import '../../../styles/components/giveaway.scss';
import GiveawayCard from '../../common/giveawayCard';
import data from '../../../data/giveaway.json';


export const After = () => (
    <div className="after">
        <div className='notify'>
            <div className='joined-giveaway'>
                <p>YOU JOINED</p>
                <p><span>0</span>GIVEAWAYS</p>
            </div>
            <div className="mobile-joined-giveaway">you joined<span> 0 </span>giveaways</div>
            <div className='earned'>
                <p className='text'>With a total earned value in USD</p>                
                <p className='amount'><span>$</span>0</p>
            </div>
        </div>
        <div className='giveaway-list'>
            <div className='active'>
                <p className='title'>Active giveaways</p>
                <div className='list'>
                    {data.map((data) => {
                        return <GiveawayCard 
                                key={data.title} 
                                title={data.title} 
                                tikkets_value={data.tikkets_value} 
                                odds_value={data.odds_value} 
                                total_price_value={data.total_price_value} 
                                image={data.image}
                            />
                    })}                   
                </div>
            </div>
            <div className='previous'>
                <div className='title'>
                    your previous giveaways
                </div>
                <div className='list'>

                </div>
            </div>
        </div>
    </div>
);