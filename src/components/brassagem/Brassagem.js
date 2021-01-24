import React from 'react'

const Brassagem = () => {

  useEffect(() => {
    const interval = setInterval(async () => {

      const res = await api.get('sensores',)

      console.log(res.data)
      setSensores(res.data)

    }, 1000);
    return () => clearInterval(interval)




  }, [])
  return (
    <div>
      Brassagem
    </div>
  )
}

export default Brassagem
