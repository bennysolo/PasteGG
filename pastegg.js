const PasteGG = async (nama, teks) => {
if (!teks) return 'Masukan parameter teks!'
if (!nama) return 'Masukan parameter nama!'
 const pastean = await fetchJson(`https://api-self.herokuapp.com/api/pastegg?teks=${teks}&nama=${nama}`, {method: 'get'})
 return anu.pastean.url
 }
 
case 'pastegg' :
var buatsplit = body.slice(9)
var namapaste = buatsplit.split('|')[0]
var tekspaste = buatsplit.split('|')[1]
try {
const pastenya = await PasteGG(namapaste, tekspaste)
reply(pastenya.result.url)
} catch (err) {
reply('Error')
}
break
