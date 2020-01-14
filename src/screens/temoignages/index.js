import { Temoignages as Component } from './temoignages'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './temoignages.listeners'


const storeToProps = (store) => {
    return {
        temoignages: store.data.temoignages.getAsArray(),
        /*onClickCoeur: () => {
            
        }*/
    }
}

export const Temoignages = compose(
    forRoute.absolute('TEMOIGNAGES'),
    inject(storeToProps),
    listen(listeners, 'TEMOIGNAGES')
    
)(Component)