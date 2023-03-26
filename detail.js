content={
    First_year:[
        
        {
            header:"Complex Numbers",
            
        content:`<h1>Introduction</h1>
        <p>We can consider that the real numbers domain (family) is one-dimensional because a real number has only one value at a time.

        Complex numbers are bi-dimensional, they consist of a pair of two real numbers. We take as example the complex number z which is defined by a pair two real numbers a and b.
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
    <mtr>
      <mtd>
        <mi>z</mi>
        <mo>=</mo>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>z</mi>
        <mo>&#x2208;<!-- ∈ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mi mathvariant="double-struck">C</mi>
        </mrow>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>a</mi>
        <mo>,</mo>
        <mi>b</mi>
        <mo>&#x2208;<!-- ∈ --></mo>
        <mrow class="MJX-TeXAtom-ORD">
          <mi mathvariant="double-struck">R</mi>
        </mrow>
      </mtd>
    </mtr>
  </mtable>
</math>
       </math>
       </p>
        <p>When we are dealing with complex numbers we are writing them in this form:</p>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable displaystyle="true">
    <mlabeledtr>
      <mtd id="mjx-eqn-1">
        <mtext>(1)</mtext>
      </mtd>
      <mtd>
        <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
          <mtr>
            <mtd>
              <mstyle mathbackground="#FFFF9D">
                <mi>z</mi>
                <mo>=</mo>
                <mi>a</mi>
                <mo>+</mo>
                <mi>b</mi>
                <mo>&#x22C5;<!-- ⋅ --></mo>
                <mi>i</mi>
              </mstyle>
            </mtd>
          </mtr>
        </mtable>
      </mtd>
    </mlabeledtr>
  </mtable>
</math>

<p> A complex number z consists of a <b>real part a< and an imaginary part b </b>. If a is zero then the complex number z becomes purely imaginary, if the imaginary part is zero then the complex number z is purely real (or real number):</p>
<ul>
<li><b>purely imaginary</b>: z = b · i </li>
<li> <b>purely real</b>: z = a</li>
</ul>
<p>Here are some examples of two complex numbers z1 and z2: </p>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right left" rowspacing="3pt" columnspacing="0em" displaystyle="true">
    <mtr>
      <mtd>
        <msub>
          <mi>z</mi>
          <mn>1</mn>
        </msub>
        <mo>=</mo>
        <mn>2</mn>
        <mo>+</mo>
        <mn>1</mn>
        <mo>&#x22C5;<!-- ⋅ --></mo>
        <mi>i</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>z</mi>
          <mn>2</mn>
        </msub>
        <mo>=</mo>
        <mn>1</mn>
        <mo>+</mo>
        <mn>3</mn>
        <mo>&#x22C5;<!-- ⋅ --></mo>
        <mi>i</mi>
      </mtd>
    </mtr>
  </mtable>
</math>
<h1> Operations </h1>
<h4> 1. Addition </h4>
<p>When performing an addition on two complex numbers we add the real part of the first number (a1) with the real part of the second number (a2). We do the same for the imaginary parts, (b1) is added to (b2).</p>

        `
        } ,

        {header:"Partial derivations",
        content:`<h1>Introduction</h1>
        <p>You have studied differentiation earlier and you might be thinking- how Partial Derivatives is different from the regular differentiation? The difference between the two is itself the definition of P.D.(the short form we'll be using for Partial Derivatives).
        In Differentiation, we had two variables where 
         was an independent variable and 
         was dependent on 
        , as shown in the diagram below:</p>
        <img src="https://1.bp.blogspot.com/-eUwiLxbZwJM/XlZ-U1tg5iI/AAAAAAAAAIs/8Tf_zPsDHF0wofwFJSvZ-DScIRZ24iBhQCLcBGAsYHQ/s1600/Differentiation%25281%2529.jpg" alt="PD" width="" height="250" class="center">
        <p> The symbol used to denote partial derivatives is <b>∂</b>. One of the first known uses of this symbol in mathematics is by <b>Marquis de Condorcet</b> from 1770, who used it for partial differences. The modern partial derivative notation was created by Adrien-Marie Legendre (1786), although he later abandoned it; Carl Gustav Jacob Jacobi reintroduced the symbol in 1841.</p>
        <P> Here are some examples: </P>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>a)</mtext>
  <mspace width="10pt"></mspace>
  <mfrac>
    <mi>&#x2202;</mi>
    <mrow>
      <mi>&#x2202;</mi>
      <mi>x</mi>
    </mrow>
  </mfrac>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>2</mn>
  <mi>x</mi>
  <mo>+</mo>
  <mn>0</mn>
  <mo>;</mo>
  <mspace width="25pt"></mspace>
  <mfrac>
    <mi>&#x2202;</mi>
    <mrow>
      <mi>&#x2202;</mi>
      <mi>y</mi>
    </mrow>
  </mfrac>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mi>y</mi>
</math>
        `
        } ,

        {header:"y",
        content:`<h1>aidad</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        `
        } 
    
    ],
    Second_year:[
           
        {header:"Multiple integration",
        content:`<h1>Introduction</h1>
        <p>In normal Integration we would perform integration w.r.t. only one variable; in Double Integration we will perform integration w.r.t. two variables.</p>
        <p>Here we are going to study three types of Double Integration:<br>
        Type 1 : With constant limits<br>
        Type 2 : With variable limits<br>
        Type 3 : No limits -> we would have to find out from the question<br>
       <h4>Type-1 : With constant limits :</h4>
       <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>4</mn>
  </msubsup>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msubsup>
  <mi>x</mi>
  <mi>y</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mi>d</mi>
  <mi>y</mi>
</math>
<p> Here the confusion is- which variable has which limits, so below is the rule:<br><br>
In this problem 
 x has limits 0 to 10, y has limits 0 to 4.
And there is no rule for which variable has to be integrated first so you can either first integrate 
 and then 
 or vice-versa. Let's integrate the above problem in both orders:<br><br>
  1. First x then y
  <br></p>
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>4</mn>
  </msubsup>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mn>2</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msubsup>
  <mi>y</mi>
  <mi>d</mi>
  <mi>y</mi>
  <mo>=</mo>
  <mn>50</mn>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>4</mn>
  </msubsup>
  <mi>y</mi>
  <mi>d</mi>
  <mi>y</mi>
</math> <br> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <mn>50</mn>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>y</mi>
          <mn>2</mn>
        </msup>
        <mn>2</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mn>4</mn>
  </msubsup>
  <mo>=</mo>
  <mn>50</mn>
  <mo>&#xD7;</mo>
  <mn>8</mn>
  <mo>=</mo>
  <mn>400</mn>
</math> <br>
<p> 2. First y then x<br> </p>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msubsup>
  <mi>x</mi>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>y</mi>
          <mn>2</mn>
        </msup>
        <mn>2</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>4</mn>
    </mrow>
  </msubsup>
  <mi>d</mi>
  <mi>x</mi>
  <mo>=</mo>
  <mn>8</mn>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mrow data-mjx-texclass="ORD">
      <mn>10</mn>
    </mrow>
  </msubsup>
  <mi>x</mi>
  <mi>d</mi>
  <mi>x</mi>
</math><br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <mn>8</mn>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mn>2</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mn>4</mn>
  </msubsup>
  <mo>=</mo>
  <mn>8</mn>
  <mo>&#xD7;</mo>
  <mn>50</mn>
  <mo>=</mo>
  <mn>400</mn>
</math><br>
<p> As you can see answer in both cases is same <br></p> 

<h4>Type-2 : With variable limits</h4>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mrow>
    <mi>x</mi>
  </msubsup>
  <mi>x</mi>
  <mi>y</mi>
  <mi>d</mi>
  <mi>x</mi>
  <mi>d</mi>
  <mi>y</mi>
</math>
<p>Here the rule that you used in first type is not applicable. In this type, one limit consists of x
 variable, so the question is: to which variable does it belong? The answer is simple, consider this: does x=x
 make any sense to you? No. Does y=x
 make sense to you? Yes. Why? Because in first equation x
 was written in terms of x
 which just doesn't make any sense and in the second equation, x
 was written in terms of y
 which is obvious. So from this you can conclude that if the limit consists of x
 variable, then it must belong to y
 and if the limit consists of y
 variable, then it must belong to x <br>
.
Also here the order of integration matters: the one with variable limits will be integrated first. So let's solve the above problem:</p> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>y</mi>
          <mn>2</mn>
        </msup>
        <mn>2</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mrow>
    <mi>x</mi>
  </msubsup>
  <mi>x</mi>
  <mi>d</mi>
  <mi>x</mi>
</math><br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mn>2</mn>
    </mfrac>
    <mo>&#x2212;</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>4</mn>
      </msup>
      <mn>2</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
  <mi>x</mi>
  <mi>d</mi>
  <mi>x</mi>
</math><br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">(</mo>
    <msup>
      <mi>x</mi>
      <mn>3</mn>
    </msup>
    <mo>&#x2212;</mo>
    <msup>
      <mi>x</mi>
      <mn>5</mn>
    </msup>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
  <mi>d</mi>
  <mi>x</mi>
</math><br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>4</mn>
        </msup>
        <mn>4</mn>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>6</mn>
        </msup>
        <mn>6</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
</math><br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">(</mo>
    <mfrac>
      <mn>1</mn>
      <mn>4</mn>
    </mfrac>
    <mo>&#x2212;</mo>
    <mfrac>
      <mn>1</mn>
      <mn>6</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">)</mo>
  </mrow>
  <mo>=</mo>
  <mfrac>
    <mn>1</mn>
    <mn>24</mn>
  </mfrac>
</math><br><br>
<h4> Type 3 : No limit </h4>
<p>n this type of problems, we won't be given limits, instead we will be given equations of lines or curves which we will use to determine the region 
in cartesian plane over which we will integrate the given integral. Let's see an example : <br><br>
<b> Sample problem : </b> <br>
</p>
<p>Evaluate <math xmlns="http://www.w3.org/1998/Math/MathML">
<mspace width="5pt"></mspace>
<mo data-mjx-texclass="OP">&#x222C;</mo>
<mi>x</mi>
<mi>y</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo>+</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mi>d</mi>
<mi>x</mi>
<mi>d</mi>
<mi>y</mi>
<mspace width="5pt"></mspace>
</math>
over the area bounded between the curves
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <mi>x</mi>
</math>
and 
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>y</mi>
  <mo>=</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>.
<br><br>
Solution:
<br>
First trace the curve, second identify the region. <br> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>y</mi>
  <mo>=</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
</math>
<br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>y</mi>
  <mo>=</mo>
  <mi>x</mi>
</math><br><br>
We'll find points of intersection between the curves for limits <br><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <mi>x</mi>
  <mo stretchy="false">&#x21D2;</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mo>&#x2212;</mo>
  <mi>x</mi>
  <mo>=</mo>
  <mn>0</mn>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mi>x</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>&#x2212;</mo>
  <mn>1</mn>
  <mo stretchy="false">)</mo>
  <mo>=</mo>
  <mn>0</mn>
</math><br>
</p>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo stretchy="false">&#x21D2;</mo>
  <mi>x</mi>
  <mo>=</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>x</mi>
  <mo>=</mo>
  <mn>1</mn>
</math> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>For&#xA0;</mtext>
  <mi>x</mi>
  <mo>=</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mn>0</mn>
</math> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>For&#xA0;</mtext>
  <mi>x</mi>
  <mo>=</mo>
  <mn>0</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mn>0</mn>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtext>For&#xA0;</mtext>
  <mi>x</mi>
  <mo>=</mo>
  <mn>1</mn>
  <mo>,</mo>
  <mi>y</mi>
  <mo>=</mo>
  <mn>1</mn>
</math><br>
<p>So the points of intersection are (0,0) and (1,1)</p> <br>
<img src="https://3.bp.blogspot.com/-MXcLxB55UBI/Xlfe4RmTbRI/AAAAAAAAAL0/U6ySxFLWafcwcUsPiTZY0_bHFrii536fgCLcBGAsYHQ/s1600/DI2%25281%2529.jpg" alt="curve" width="400" height="400" class="center">
<br>
<p> Let's do this wih verical strip </p> <br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mrow>
    <mi>x</mi>
  </msubsup>
  <mi>x</mi>
  <mi>y</mi>
  <mo stretchy="false">(</mo>
  <mi>x</mi>
  <mo>+</mo>
  <mi>y</mi>
  <mo stretchy="false">)</mo>
  <mi>d</mi>
  <mi>x</mi>
  <mi>d</mi>
  <mi>y</mi>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mrow>
    <mi>x</mi>
  </msubsup>
  <mo stretchy="false">(</mo>
  <msup>
    <mi>x</mi>
    <mn>2</mn>
  </msup>
  <mi>y</mi>
  <mo>+</mo>
  <mi>x</mi>
  <msup>
    <mi>y</mi>
    <mn>2</mn>
  </msup>
  <mo stretchy="false">)</mo>
  <mi>d</mi>
  <mi>x</mi>
  <mi>d</mi>
  <mi>y</mi>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <mrow>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <msup>
            <mi>y</mi>
            <mn>2</mn>
          </msup>
        </mrow>
        <mn>2</mn>
      </mfrac>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mi>x</mi>
          <msup>
            <mi>y</mi>
            <mn>3</mn>
          </msup>
        </mrow>
        <mn>3</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
    </mrow>
    <mi>x</mi>
  </msubsup>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <msubsup>
    <mo data-mjx-texclass="OP">&#x222B;</mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
  <mrow data-mjx-texclass="INNER">
    <mo data-mjx-texclass="OPEN">[</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>4</mn>
      </msup>
      <mn>2</mn>
    </mfrac>
    <mo>+</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>4</mn>
      </msup>
      <mn>3</mn>
    </mfrac>
    <mo>&#x2212;</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>6</mn>
      </msup>
      <mn>2</mn>
    </mfrac>
    <mo>&#x2212;</mo>
    <mfrac>
      <msup>
        <mi>x</mi>
        <mn>7</mn>
      </msup>
      <mn>3</mn>
    </mfrac>
    <mo data-mjx-texclass="CLOSE">]</mo>
  </mrow>
  <mi>d</mi>
  <mi>x</mi>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <msubsup>
    <mrow data-mjx-texclass="INNER">
      <mo data-mjx-texclass="OPEN">[</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>5</mn>
        </msup>
        <mn>10</mn>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>7</mn>
        </msup>
        <mn>14</mn>
      </mfrac>
      <mo>+</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>5</mn>
        </msup>
        <mn>15</mn>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <msup>
          <mi>x</mi>
          <mn>8</mn>
        </msup>
        <mn>24</mn>
      </mfrac>
      <mo data-mjx-texclass="CLOSE">]</mo>
    </mrow>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
</math><br>
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mo>=</mo>
  <menclose notation="box">
    <mrow data-mjx-texclass="ORD">
      <mstyle displaystyle="true" scriptlevel="0">
        <mrow data-mjx-texclass="ORD">
          <mfrac>
            <mn>3</mn>
            <mn>56</mn>
          </mfrac>
        </mrow>
      </mstyle>
    </mrow>
  </menclose>
</math><br>






        `
        },
        
        {header:"Differential Equations of First Order and First Degree ",
        content:`<h1>Introduction</h1>
        <p>A differential equation of first order and first degree can be written as f( x, y, dy/dx) = 0.

        First order and first degree differential
        
        A differential equation of first order and first degree can be written as f( x, y, dy/dx) = 0.
        
        Here we will discuss the solution of few types of <br><br>
        
      
        <b> General solution and particular solution :</b> <br>
        For any differential equations it is possible to find the general solution and particular solution.<br><br>
      
        
        
        
        <b>Differential Equation in which variables are separable:</b> 
        <br>If in an equation it is possible to collect all the terms of x and dx on one side and all the terms of y and dy on the other side, then the variables are said to be separable. Thus the general form of such an equation is
        <br>
        f(x)dx = g(y)dy (or) f(x)dx + g(y)dy = 0 <br>
        
        By direct integration we get the solution.<br> <br>

        <u> Example 1: </U><br>
        </p>Solve: ( x2 + x +1) dx + ( y2 - y + 3)dy  = 0 
        <br> <br>Solution: <br>
        </P> 


        <img src="https://img.brainkart.com/imagebk39/EEKl0Km.jpg" alt="Gt" width="350" height="210"> <br>
        <p><u> Example 2: </u> <br><br>
        The sum of ₹2,000 is compounded continuously, the nominal rate of interest being 5% per annum.
         In how many years will the amount be double the original principal? (loge 2 = 0.6931) <br>
        </p>
        
        <p> Solution: </P><br>
        <img src="https://img.brainkart.com/imagebk39/L9entK1.jpg" alt="Gt" width="450" height="582"> <br>
        `
        } 

        
   
    ],
    Third_year:[
           
        {header:" Laplace Transform",
        content:`<h1>Introduction</h1>
        
        <p>
        The Laplace transform is a well established mathematical technique for solving a differential equation. Many mathematical problems are solved using transformations. The idea is to transform the problem into another problem that is easier to solve. On the other side, the inverse transform is helpful to calculate the solution to the given problem.
        The Laplace Transform is a mathematical tool used to convert a function from the time domain to the frequency domain. It can be thought of as a tool for analyzing the behavior of a system in terms of its frequency response.<br><br>

        The inverse Laplace Transform is the opposite process, which involves transforming a function from the frequency domain back to the time domain. In other words, it is a method of recovering the original function from its Laplace transform.<br><br>
        
        The inverse Laplace Transform is typically denoted as L^-1 or F^-1, and it involves solving an integral equation. Given a function F(s) in the frequency domain, the inverse Laplace Transform L^-1{F(s)} produces a function f(t) in the time domain.
        
        The integral equation for the inverse Laplace Transform is:<br> 
        
        f(t) = L^-1{F(s)} = (1/2πi) * ∫γ[ e^(st) * F(s) ds] <br><br>
        
        where γ is a vertical line in the complex plane, and s is a complex variable. The integral is evaluated by integrating along this line, and the result is a function of t in the time domain.
        
        The inverse Laplace Transform is an important tool in many areas of science and engineering, including control theory, signal processing, and circuit analysis. It is used to analyze the behavior of systems in the time domain, and to design controllers and filters that can modify this behavior in a desired way.Partial fraction decomposition is a method used to break down a complex rational function into simpler terms that can be easily inverted using a table of Laplace transforms. The method involves finding the roots of the denominator polynomial and decomposing the function into partial fractions based on these roots.
        
        Contour integration is a method used to compute the inverse Laplace transform of a function using complex analysis. The method involves integrating the function along a closed contour in the complex plane and using the residue theorem to evaluate the integral.<br><br>
        
        The convolution theorem is a powerful method used to compute the inverse Laplace transform of a product of two functions. The method involves transforming each function separately, multiplying the resulting frequency-domain functions, and then inverting the product using the convolution theorem.
        
        The inverse Laplace transform is an important tool in many areas of science and engineering. It allows us to analyze and solve complex problems in the time-domain that would be difficult or impossible to solve using other methods. By transforming a problem into the frequency-domain, we can gain insights into the behavior of a system under different conditions and design more efficient and effective control systems.
        
        <br><br>In summary, the inverse Laplace transform is a mathematical operation that allows us to transform a frequency-domain function back into a time-domain function. It can be computed using various methods, including partial fraction decomposition, contour integration, and the convolution theorem. The inverse Laplace transform is an important tool in many areas of science and engineering and can be used to analyze and 
        solve complex problems in the time-domain. <br><br>
        
        The Formulae for Lapalce Transform is given by: <br><br></p>
        <img src="https://www.gstatic.com/education/formulas2/472522532/en/laplace_transform.svg" alt="G" width="379" height="105"><br><br>
       <h4> Laplace Transform Examples :<br><br></h4>
       <img src="https://cdn1.byjus.com/wp-content/uploads/2020/02/Laplace-Transform-1.png" alt="G" width="579" height="257"><br>
       <img src="https://cdn1.byjus.com/wp-content/uploads/2020/02/Laplace-Transform-2.png" alt="G" width="591" height="470"><br><br>

        `
        } ,

           
        {header:"Fourier serires",
        content:`<h1>Introduction</h1>
        <p>Most of the phenomena studied in the domain of Engineering and Science are periodic in nature. For instance, current and
         voltage in an alternating current circuit. These periodic functions could be analyzed into their constituent components 
         (fundamentals and harmonics) by a process called Fourier analysis.<br>
         
         <br> <b>What is the Fourier Series?</b> <br>
A Fourier series is an expansion of a periodic function f(x) in terms of an infinite sum of sines and cosines. Fourier Series 
makes use of the orthogonality relationships of the sine and cosine functions.<br>

<u>Laurent Series yield Fourier Series</u><br>

A difficult thing to understand and/or motivate is the fact that arbitrary periodic functions have Fourier series representations.
 In this section, we prove that periodic analytic functions have such a representation using Laurent expansions. 
 
 <b>Fourier Analysis for Periodic Functions</b> <br>
The Fourier series representation of analytic functions is derived from Laurent expansions.
 The elementary complex analysis is used to derive additional fundamental results in the harmonic analysis including the representation of C∞ periodic functions by Fourier series, the representation of rapidly decreasing functions by Fourier integrals,
 and Shannon’s sampling theorem. The ideas are classical and of transcendent beauty</p>
<h4> Fourier series Formula </h4>
 <p>The formula for the fourier series of the function f(x) in the interval [-L, L], i.e. -L ≤ x ≤ L is given by:</P><br>
        <img src="https://cdn1.byjus.com/wp-content/uploads/2020/11/Fourier-series-formula.png" alt="Girl in a jacket" width="369" height="157">
        <h4> Fourier Series Example </h4>
        <p>Example: Determine the fourier series of the function f(x) = 1 – x2 in the interval [-1, 1].<br>

        Solution:<br>
        
        Given,<br>
        
        f(x) = 1 – x2; [-1, 1]<br>
        
        We know that, the fourier series of the function f(x) in the interval [-L, L], i.e. -L ≤ x ≤ L is written as <br></p>
        <img src="https://cdn1.byjus.com/wp-content/uploads/2020/11/Fourier-series-example-sol.png" alt="G" width="520" height="418"><br><br>
        `
        } 
   
    ],
    Forth_year:[
           
        {header:"Complex Integration",
        content:`<h1>Introduction</h1>
        <p>Complex integration, also known as contour integration, is a powerful tool in complex analysis that allows us to evaluate complex integrals using the properties of complex functions. In particular, complex integration is useful for calculating integrals of functions that are difficult or impossible to evaluate using real analysis.<br><br>

        A complex integral is an integral of a complex function over a curve in the complex plane. The curve is typically parameterized by a complex variable z(t), where t is a real parameter. The integral is denoted by the symbol ∫C f(z) dz, where C is the curve of integration.<br><br>
        
        There are several types of complex integrals, including:<br><br>
        
        Line integrals: A line integral is an integral of a complex function over a curve C in the complex plane. The integral is defined as:<br><br>
        ∫C f(z) dz = ∫a^b f(z(t)) z'(t) dt<br><br>
        
        where a and b are the endpoints of the curve C, and z'(t) is the derivative of z(t) with respect to t.<br><br>
        
        Contour integrals: A contour integral is a line integral where the curve C is closed. The integral is denoted by the symbol ∮C f(z) dz.<br><br>
        
        Path integrals: A path integral is an integral of a complex function over a path γ in the complex plane. The integral is defined as:<br><br>
        
        ∫γ f(z) dz = ∫a^b f(z(t)) z'(t) dt<br><br>
        
        where a and b are the endpoints of the path γ, and z'(t) is the derivative of z(t) with respect to t.<br><br>
        
        The Cauchy-Goursat theorem and the Cauchy integral theorem are important results in complex integration. These theorems state that the integral of a complex function over a closed curve is zero, provided that the function is analytic (i.e., differentiable) everywhere inside the curve.<br><br>
        
        The Cauchy integral formula is another important result in complex integration. This formula states that the value of an analytic function f(z) at any point inside a simple closed curve C can be calculated using the integral of f(z) over C. The formula is given by:<br><br>
        
        f(z) = (1/2πi) ∫C f(w)/(w-z) dw<br><br>
        
        where i is the imaginary unit, and w is a variable that parameterizes the curve C.<br><br>
        
        Complex integration also has applications in many areas of mathematics and physics, including complex analysis, quantum mechanics, and fluid dynamics. It is a powerful tool for solving complex problems that cannot be solved using real analysis alone.<br><br></p>
        <h4> Complex integration examples </h4>
        <img src="https://img.brainkart.com/imagebk7/AHIIG3s.jpg" alt="G" width="682" height="778">
        
        `
        } ,

        {header:"Differential Equations of First Order and First Degree ",
        content:`<h1>Introduction</h1>
        <p>A differential equation of first order and first degree can be written as f( x, y, dy/dx) = 0.

        First order and first degree differential
        
        A differential equation of first order and first degree can be written as f( x, y, dy/dx) = 0.
        
        Here we will discuss the solution of few types of <br><br>
        
      
        <b> General solution and particular solution :</b> <br>
        For any differential equations it is possible to find the general solution and particular solution.<br><br>
      
        
        
        
        <b>Differential Equation in which variables are separable:</b> 
        <br>If in an equation it is possible to collect all the terms of x and dx on one side and all the terms of y and dy on the other side, then the variables are said to be separable. Thus the general form of such an equation is
        <br>
        f(x)dx = g(y)dy (or) f(x)dx + g(y)dy = 0 <br>
        
        By direct integration we get the solution.<br> <br>

        <u> Example 1: </U><br>
        </p>Solve: ( x2 + x +1) dx + ( y2 - y + 3)dy  = 0 
        <br> <br>Solution: <br>
        </P> 


        <img src="https://img.brainkart.com/imagebk39/EEKl0Km.jpg" alt="Gt" width="350" height="210"> <br>
        <p><u> Example 2: </u> <br><br>
        The sum of ₹2,000 is compounded continuously, the nominal rate of interest being 5% per annum.
         In how many years will the amount be double the original principal? (loge 2 = 0.6931) <br>
        </p>
        
        <p> Solution: </P><br>
        <img src="https://img.brainkart.com/imagebk39/L9entK1.jpg" alt="Gt" width="450" height="582"> <br>
        `
        } 



   
    ]
}
let display =[]
if(window.year === 1)
{
display=content.First_year
}
if(window.year === 2)
{
display=content.Second_year
}
if(window.year === 3)
{
display=content.Third_year
}
if(window.year === 4)
{
display=content.Forth_year
}


content_box=document.querySelector(".content");
navx=document.querySelector(".vertical-menu");
vertical_text=""
display.forEach((ev,index)=>{

vertical_text+=`<li id="${index}" class="article" >${ev.header}</li>`
})
navx.innerHTML=vertical_text

aa=document.querySelectorAll(".article")
aa.forEach(ev=>{
    ev.addEventListener("click", render_detail)
})
function render_detail(ev)
{
    content_box.innerHTML = display[ev.target.id].content
}


