import React from 'react'

const Comment = ({ comentario }) => {
    let comment = 'vazio'
    let email = 'vazio'
    if (comentario) {
        if (comentario.comment) {
            comment = comentario.comment
        }
        if (comentario.email) {
            email = comentario.email
        }
    }
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                {comment}
                <br />
                <span className='text-muted'>Enviado por:{email}</span>
            </div>
        </div>
    )
}
export default Comment