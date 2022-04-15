// Adapted from - Uploading files with React and Typescript
// https://www.davebernhard.com/blog/pretty-file-upload-in-react
// (Hides file input box - replaces with button)
import React, { useRef, useState, ChangeEvent } from 'react'

interface Props {
    name: string,
    stateChanger: (value: string) => void
}

const UploadButton = ({name, stateChanger: stateChanger}: Props) => {
  const [uploadError, setUploadError] = useState('')
  const uploadRef = useRef<HTMLInputElement>(null)

  const handleUpload = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files === null) {
      return
    }
    const file = e.target.files[0]

    if (file) {
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        const rawData = event?.target?.result;
        stateChanger(rawData as string);
      }

      e.target.value = ''
      fileReader.readAsText(file)
    } else {
      setUploadError(
        'File could not be uploaded. Please try again.'
      )
    }
  }

  return (
    <>
      {/* style this however you like */}
      <button onClick={() => uploadRef.current?.click()}>
        {name}
      </button>

      <input
        type='file'
        ref={uploadRef}
        onChange={handleUpload}
        style={{ display: 'none' }}
      />

      {uploadError ? <p>{uploadError}</p> : null}
    </>
  )
}

export default UploadButton;
