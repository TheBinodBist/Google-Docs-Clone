

interface DocumentIdPageProps{
    params: Promise < {documentId: string}>
}
function DocumentIdPage = async({params}:DocumentIdPageProps)=> {
    const awaitParams = await params;
    const documentId=awaitParams.documentId;
  return (
    <div>DocumentIdPage{documentId}

    </div>
  )
}

export default DocumentIdPage