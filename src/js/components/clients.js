const clients = (state,parentSelector,...restClasses) => {
    console.log('clients');
    const parent = document.querySelector(parentSelector);

    function createClientsData({ name,surname,imgUrl,marathons,descr }) {
        const caseMarathons = marathons > 1 && marathons < 5 ? 'полумарафона' : marathons === 1 ? 'полумарафон' : 'полумарафонов'
        const client = document.createElement('div');
        client.classList.add(...restClasses);
        client.innerHTML = `
					<div class="clients__img-wrapper">
						<img class="clients__img" src="${imgUrl}" alt="person">
					</div>
					<div class="clients__info">
						<h4 class="clients__name-surname">${name} ${surname}</h4>
						<div class="clients__marathons">${marathons} ${caseMarathons}</div>
						<p class="clients__descr">
						${descr}</p>
					</div>`;
        parent.append(client)

    }

    function clientCreator() {
        state.clientsState.forEach(client => {
            createClientsData(client);
        })
    }

    clientCreator(state.clientsState);
}

export default clients;