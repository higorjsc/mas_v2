
<template>

    <nav>
        <ul class="ul-parent">
            <li class="menu-acesso">{{metodoAcesso}}
                <ul class="menu" >
                    <li class="option option-acesso">
                        <RouterLink class= 'link'  to="/cardozo">
Cardozo (2023)
</RouterLink>
                    </li>
                    <li class="option option-acesso">
                        <RouterLink class= 'link'  to="/vergne">
La Vergne (2003)
</RouterLink>
                    </li>
                    <li class="option option-acesso">
                        <RouterLink class= 'link' to="/moser">
Moser (1996)
</RouterLink>
                    </li>
                </ul>
            </li>
            <li class="menu-lavra">{{metodoLavra}}
                <ul class="menu">
                    <li class="option option-lavra">
                        <RouterLink class= 'link'  to="/cardozo">
Cardozo (2023)
</RouterLink>
                    </li>
                    <li class="option option-lavra">
                        <RouterLink class= 'link'  to="/vergne">
La Vergne (2003)
</RouterLink>
                    </li>
                    <li class="option option-lavra">
                        <RouterLink class= 'link' to="/moser">
Moser (1996)
</RouterLink>
                    </li>
                    <li class="option option-lavra">
                        <RouterLink class= 'link' to="/moser">
                        Moser (1996)
                        </RouterLink>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>

</template>

<script>

export default {
    name: "navBar",
    data() {
        return {
            metodoAcesso: "MÉTODO DE ACESSO",
            metodoLavra: "MÉTODO DE LAVRA"
        }
    }

}

</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    nav{
        position: relative;
        margin: auto;
        width: 50%;
        border-radius: 20px;
        text-align: center;
        overflow: hidden;
    }

    ul{
        list-style-type: none;
    }

    li{
        background: var(--cor-tema);
        color: var(--cor-texto-tema);
    }
    .option{
        display: none;
    }
    .menu-lavra:hover .option-lavra{
        display: block;
    }
    .menu-acesso:hover .option-acesso{
        display: block;
    }
    .option:hover{
        background-color: var(--cor-hover);
        text-decoration: underline;
    }
    .link{
        text-decoration: none;
        color: var(--cor-texto-tema);
    }
</style>
