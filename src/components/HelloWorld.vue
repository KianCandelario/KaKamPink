<template>
  <div>
    <DefaultCollapse>
      <template #header>
        <div>Collapse item 1</div>
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis.
      </div>
    </DefaultCollapse>
    
    <DefaultCollapse>
      <template #header>
        <div>Collapse item 2</div>
      </template>
      <div>
        Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique.
        <br><br>
        Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex, eu aliquam erat sagittis eget.
      </div>
    </DefaultCollapse>

    <AccordionCollapse>
      <template #header>
        <div>Collapse item 1</div>
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis.
      </div>
    </AccordionCollapse>
    
    <AccordionCollapse>
      <template #header>
        <div>Collapse item 2</div>
      </template>
      <div>
        Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique.
        <br><br>
        Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex, eu aliquam erat sagittis eget.
      </div>
    </AccordionCollapse>

    <HoverCollapse>
      <template #header>
        <div>Collapse item 1</div>
      </template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis.
      </div>
    </HoverCollapse>
    
    <HoverCollapse>
      <template #header>
        <div>Collapse item 2</div>
      </template>
      <div>
        Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique.
        <br><br>
        Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex, eu aliquam erat sagittis eget.
      </div>
    </HoverCollapse>
  </div>
</template>

<script>
import DefaultCollapse from '../components/Collapse/Default.vue';
import AccordionCollapse from '../components/Collapse/Accordion.vue';
import HoverCollapse from '../components/Collapse/Hover.vue';

export default {
  components: {
    DefaultCollapse,
    AccordionCollapse,
    HoverCollapse
  }
}
</script>
