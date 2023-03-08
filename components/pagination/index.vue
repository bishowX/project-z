<template>
	<div class="pagination">
		<a href="#"><ChevronLeftIcon /></a>
		<a href="#">1</a>
		<a class="active" href="#">2</a>
		<a href="#">3</a>
		<a href="#">4</a>
		<a href="#">5</a>
		<a href="#">6</a>
		<a href="#"><ChevronRightIcon /></a>
	</div>
</template>

<style scoped>
.pagination {
	display: inline-block;
}

.pagination a {
	color: #6c727f;
	float: left;
	padding: 9px 17px;
	text-decoration: none;
	border: 1px solid #d2d5da;
}

.pagination a.active {
	background-color: #d7e3f3;
	color: #0d5be2;
	border: 1px solid #d7e3f3;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}

.pagination a:first-child {
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
}

.pagination a:last-child {
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
}
</style>
