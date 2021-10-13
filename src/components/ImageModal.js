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
    }, [])
    
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={hideModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={img.url} alt={img.id} className="modal-img" />
                <button type="button" className="modal-close" onClick={hideModal}>
                    X
                    {/* <i class="ri-close-line" class="modal__close">Close</i> */}
                </button>
            </div>
        </div>
    )
}

ImageModal.propTypes = {
    show: PropTypes.bool.isRequired,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default ImageModal

