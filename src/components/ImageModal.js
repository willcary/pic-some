import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function ImageModal({show, img, hideModal}) {
    function hideOnEscapeKeyDown(e) {
        if ((e.charCode || e.keyCode) === 27) {
            hideModal();
        }
    }
    
    useEffect(() => {
        document.body.addEventListener('keydown', hideOnEscapeKeyDown)
        return function cleanup() {
            document.body.addEventListener('keydown', hideOnEscapeKeyDown)
        }
    })
    
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={hideModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={img.url} alt={img.id} className="modal-img" />
                <button type="button" className="modal-close" onClick={hideModal}>X</button>
            </div>
        </div>
    )
}

ImageModal.propTypes = {
    show: PropTypes.bool.isRequired,
}

export default ImageModal

