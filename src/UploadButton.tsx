// Adapted from - Uploading files with React and Typescript
// https://www.davebernhard.com/blog/pretty-file-upload-in-react
// (Hides file input box - replaces with button)
import React, { useRef, useState, ChangeEvent } from 'react'

const UploadButton = () => {
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
    //   if (file.type !== 'text/csv') {
    //     setUploadError('Please upload a .csv file')
    //   }

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        const contents = event?.target?.result
        // do something with the file contents here
        console.log(contents);
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
        Upload file
      </button>

      <input
        type="file"
        ref={uploadRef}
        onChange={handleUpload}
        style={{ display: 'none' }}
      />

      {uploadError ? <p>{uploadError}</p> : null}
    </>
  )
}

export default UploadButton;
