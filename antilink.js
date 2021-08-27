pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined									            
			
-----------------------------------

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))

-----------------------------------

const isAntiLink = isGroup ? antilink.includes(from) : false

-----------------------------------

case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break


-----------------------------------


if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("wa.me")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("http://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("t.me)){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    client.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }		      