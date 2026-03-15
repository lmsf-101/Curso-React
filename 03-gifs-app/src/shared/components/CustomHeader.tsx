interface CustomHeaderType {
  title: string,
  subtitle?: string
}

export const CustomHeader = ({title, subtitle}: CustomHeaderType) => {
  return (
    <div className='content-center'>
      <h1>{title}</h1>
      { subtitle && (<h4>{subtitle}</h4>)}
    </div>
  )
}
