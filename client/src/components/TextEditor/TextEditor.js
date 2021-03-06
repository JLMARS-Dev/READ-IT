import React, { useCallback, useEffect, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './TextEditor.css'
// import { io } from 'socket.io-client'
// import {useParams} from 'react-router-dom';

const SAVE_INTERVAL_MS = 2000
const TOOLBAR_OPTIONS = [
	[{ header: [1, 2, 3, 4, 5, 6, false] }],
	[{ font: [] }],
	[{ list: 'ordered' }, { list: 'bullet' }],
	['bold', 'italic', 'underline'],
	[{ color: [] }, { background: [] }],
	[{ script: 'sub' }, { script: 'super' }],
	[{ align: [] }],
	['blockquote', 'code-block'],
	['clean'],
]
export default function TextEditor(props) {
	// const {id: docID} = useParams();
	const user = JSON.parse(localStorage.getItem('profile'));
	const docID = props.docID
	const docIDslice = docID.slice(0, 7);
	const docIDslice2 = docID.slice(7);
	// const [socket, setSocket] = useState()
	const [quill, setQuill] = useState()

	// useEffect(() => {
	// 	const s = io('http://localhost:5000')
	// 	setSocket(s)

	// 	return () => {
	// 		s.disconnect()
	// 	}
	// }, [])

	useEffect(() => {
		if (props.socket == null || quill == null) return

		props.socket.once('load-document', (doc, authorList) => {
			props.setStoryData({...doc, author: authorList})
			quill.setContents(doc.story)
			quill.enable()
			
		})
			props.socket.emit('get-document', docID, user)
	}, [props.socket,props.setStoryData, quill, docID])

	useEffect(() => {
		if (props.socket == null || quill == null) return

		const interval = setInterval(() => {
			props.socket.emit('save-document', quill.getContents())
			props.socket.emit('save', props.storyData)
		}, SAVE_INTERVAL_MS)
		return () => {
			clearInterval(interval)
			// props.setStoryData({...props.storyData, story: quill.getContents()});
			// console.log(props.storyData);
		}
	}, [props.socket,props.storyData, quill])

	useEffect(() => {
		if (props.socket == null || quill == null) return
		const handler = (delta) => {
			quill.updateContents(delta)
		}
		props.socket.on('receive-changes', handler)

		return () => {
			props.socket.off('receive-changes', handler)

		}
	}, [props.socket, quill])

	useEffect(() => {
		if (props.socket == null || quill == null) return
		const handler = (delta, oldDelta, source) => {
			if (source !== 'user') return
			props.socket.emit('send-changes', delta)
		}
		quill.on('text-change', handler)

		return () => {
			quill.off('text-change', handler)
		}
	}, [props.socket, quill])

	const wrapperRef = useCallback((wrapper) => {
		if (wrapper == null) return
		wrapper.innerHTML = ''
		const editor = document.createElement('div')
		wrapper.append(editor)
		const q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } })
		q.disable()
		q.setText('Loading...')
		setQuill(q)
	}, [])

	return <div className='text-content' ref={wrapperRef}></div>
}
