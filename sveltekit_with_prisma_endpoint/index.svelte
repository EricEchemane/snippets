<script lang="ts">
	import type { User } from '$types/users';

	export let users: User[];
	let nickname = '';

	async function addUser() {
		const res = await fetch('/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				wallet_address: 'yaysudasdbasdy7asda' + users.length + 1,
				nickname: nickname,
				password: 'mypassword'
			})
		});
		if (res.ok) {
			console.log(res);

			const user = await res.json();
			users = [...users, user];
		} else {
			console.error(await res.text());
		}
	}
</script>

<main>
	{#if users.length}
		{#each users as user}
			<h> {user.nickname} </h>
		{/each}
	{:else}
		<h> Add users </h>
	{/if}
	<br />
	<input type="text" placeholder="nickname" bind:value={nickname} />
	<button on:click={addUser}>add</button>
</main>
