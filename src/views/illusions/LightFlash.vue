<template>
    <div class="LightFlash">
        <div>
            <h3 id = "head"> Light flash</h3>
            <div id="pics">
            <img class = "pic" src="../../assets/LightFlash/l1.jpg" alt="">
            <img class = "pic" src="../../assets/LightFlash/l2.jpg" alt="">
            <img class = "pic" src="../../assets/LightFlash/l3.jpg" alt="">
            <img class = "pic" src="../../assets/LightFlash/l4.jpg" alt="">
            <img class = "pic" src="../../assets/LightFlash/l5.jpg" alt="">
            </div>
        </div>
        <p id="ending">Nikon Z fc / June 2024 / Japan</p>
         <router-link to="/illusion" class="back-link">← Back to Illusion</router-link>
    </div>
</template>

<script>
export default {
    name: "LightFlash"
}
</script>

<style scoped>
.LightFlash{
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: left;
}

#pics{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.pic{
    width:60%;
}

#head{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#ending{
    margin-top: 2rem;
    text-align: right;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  color: #333;
  text-decoration: underline;
}

</style>