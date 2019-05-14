import React from 'react'
import Comment from './Comment'
import {render} from 'enzyme'

it('should render text', () => {
    const comentario = {
        comment: 'teste'
    }
    const wrapper = render(<Comment comentario={comentario}/>)
    expect(wrapper.text()).toBe('Comentário: teste')
})

it('should render empty', () => {
    
    const wrapper = render(<Comment/>)
    expect(wrapper.text()).toBe('Comentário: vazio')
})