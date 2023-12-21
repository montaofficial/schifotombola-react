import { useComputed } from "@preact/signals-react";
import { table } from "./data";

export default function Table() {
  console.log(table);
  const length = useComputed(() => table.value.length);
  return (
    <div className="grid">
      <div className="row">
        <span className={"number " +(table.value[1] ? "extracted" : "")} id="1">
          1
        </span>
        <span className={"number " +(table.value[2] ? "extracted" : "")} id="2">
          2
        </span>
        <span className={"number " +(table.value[3] ? "extracted" : "")}id="3">
          3
        </span>
        <span className={"number " +(table.value[4] ? "extracted" : "")} id="4">
          4
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="5">
          5
        </span>
        <span className={"number " +(table.value[6] ? "extracted" : "")} id="6">
          6
        </span>
        <span className={"number " +(table.value[7] ? "extracted" : "")} id="7">
          7
        </span>
        <span className={"number " +(table.value[8] ? "extracted" : "")} id="8">
          8
        </span>
        <span className={"number " +(table.value[9] ? "extracted" : "")} id="9">
          9
        </span>
        <span className={"number " +(table.value[10] ? "extracted" : "")} id="10">
          10
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[11] ? "extracted" : "")} id="11">
          11
        </span>
        <span className={"number " +(table.value[12] ? "extracted" : "")} id="12">
          12
        </span>
        <span className={"number " +(table.value[13] ? "extracted" : "")} id="13">
          13
        </span>
        <span className={"number " +(table.value[14] ? "extracted" : "")} id="14">
          14
        </span>
        <span className={"number " +(table.value[15] ? "extracted" : "")} id="15">
          15
        </span>
        <span className={"number " +(table.value[16] ? "extracted" : "")} id="16">
          16
        </span>
        <span className={"number " +(table.value[17] ? "extracted" : "")} id="17">
          17
        </span>
        <span className={"number " +(table.value[18] ? "extracted" : "")} id="18">
          18
        </span>
        <span className={"number " +(table.value[19] ? "extracted" : "")} id="19">
          19
        </span>
        <span className={"number " +(table.value[20] ? "extracted" : "")} id="20">
          20
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[21] ? "extracted" : "")} id="21">
          21
        </span>
        <span className={"number " +(table.value[22] ? "extracted" : "")} id="22">
          22
        </span>
        <span className={"number " +(table.value[23] ? "extracted" : "")} id="23">
          23
        </span>
        <span className={"number " +(table.value[24] ? "extracted" : "")} id="24">
          24
        </span>
        <span className={"number " +(table.value[25] ? "extracted" : "")} id="25">
          25
        </span>
        <span className={"number " +(table.value[26] ? "extracted" : "")} id="26">
          26
        </span>
        <span className={"number " +(table.value[27] ? "extracted" : "")} id="27">
          27
        </span>
        <span className={"number " +(table.value[28] ? "extracted" : "")} id="28">
          28
        </span>
        <span className={"number " +(table.value[29] ? "extracted" : "")} id="29">
          29
        </span>
        <span className={"number " +(table.value[30] ? "extracted" : "")} id="30">
          30
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[31] ? "extracted" : "")} id="31">
          31
        </span>
        <span className={"number " +(table.value[32] ? "extracted" : "")} id="32">
          32
        </span>
        <span className={"number " +(table.value[33] ? "extracted" : "")} id="33">
          33
        </span>
        <span className={"number " +(table.value[34] ? "extracted" : "")} id="34">
          34
        </span>
        <span className={"number " +(table.value[35] ? "extracted" : "")} id="35">
          35
        </span>
        <span className={"number " +(table.value[36] ? "extracted" : "")} id="36">
          36
        </span>
        <span className={"number " +(table.value[37] ? "extracted" : "")} id="37">
          37
        </span>
        <span className={"number " +(table.value[38] ? "extracted" : "")} id="38">
          38
        </span>
        <span className={"number " +(table.value[39] ? "extracted" : "")} id="39">
          39
        </span>
        <span className={"number " +(table.value[40] ? "extracted" : "")} id="40">
          40
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[41] ? "extracted" : "")} id="41">
          41
        </span>
        <span className={"number " +(table.value[42] ? "extracted" : "")} id="42">
          42
        </span>
        <span className={"number " +(table.value[43] ? "extracted" : "")} id="43">
          43
        </span>
        <span className={"number " +(table.value[44] ? "extracted" : "")} id="44">
          44
        </span>
        <span className={"number " +(table.value[45] ? "extracted" : "")} id="45">
          45
        </span>
        <span className={"number " +(table.value[46] ? "extracted" : "")} id="46">
          46
        </span>
        <span className={"number " +(table.value[47] ? "extracted" : "")} id="47">
          47
        </span>
        <span className={"number " +(table.value[48] ? "extracted" : "")} id="48">
          48
        </span>
        <span className={"number " +(table.value[49] ? "extracted" : "")} id="49">
          49
        </span>
        <span className={"number " +(table.value[50] ? "extracted" : "")} id="50">
          50
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="51">
          51
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="52">
          52
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="53">
          53
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="54">
          54
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="55">
          55
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="56">
          56
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="57">
          57
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="58">
          58
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="59">
          59
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="60">
          60
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="61">
          61
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="62">
          62
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="63">
          63
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="64">
          64
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="65">
          65
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="66">
          66
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="67">
          67
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="68">
          68
        </span>
        <span className="number nice" id="69">
          69 <span className="nice-text">nice!</span>
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="70">
          70
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="71">
          71
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="72">
          72
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="73">
          73
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="74">
          74
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="75">
          75
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="76">
          76
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="77">
          77
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="78">
          78
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="79">
          79
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="80">
          80
        </span>
      </div>
      <div className="row">
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="81">
          81
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="82">
          82
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="83">
          83
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="84">
          84
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="85">
          85
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="86">
          86
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="87">
          87
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="88">
          88
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="89">
          89
        </span>
        <span className={"number " +(table.value[5] ? "extracted" : "")} id="90">
          90
        </span>
      </div>
      <span>
          {length}
        </span>
    </div>
  );
}
